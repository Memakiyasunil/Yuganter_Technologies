import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { faqAPI } from "../services/faqAPI";
import { FAQ_CATEGORY_OPTIONS, FAQ_CATEGORIES } from "../constants/faqDefaults";

const EMPTY_FORM = { question: "", answer: "" };

export default function AdminFaq() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(FAQ_CATEGORIES.HOME);
  const [faqs, setFaqs] = useState([]);
  const [editingFaq, setEditingFaq] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
      return;
    }
    loadCategoryFaqs(selectedCategory);
  }, [navigate, selectedCategory]);

  const loadCategoryFaqs = async (category) => {
    setLoading(true);
    setError("");
    try {
      const data = await faqAPI.getByCategory(category);
      setFaqs(data);
    } catch (err) {
      setError(err.message || "Failed to load FAQs.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingFaq(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.question.trim() || !form.answer.trim()) {
      setError("Both question and answer are required.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      if (editingFaq) {
        const updated = await faqAPI.update(editingFaq.id, {
          question: form.question.trim(),
          answer: form.answer.trim(),
        });
        setFaqs((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
      } else {
        const created = await faqAPI.create({
          category: selectedCategory,
          question: form.question.trim(),
          answer: form.answer.trim(),
        });
        setFaqs((prev) => [...prev, created]);
      }
      resetForm();
    } catch (err) {
      setError(err.message || "Unable to save FAQ.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
    setForm({ question: faq.question, answer: faq.answer });
    setError("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this FAQ?")) return;
    setLoading(true);
    try {
      await faqAPI.delete(id);
      setFaqs((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message || "Unable to delete FAQ.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button className="bg-blue-600 text-white p-2 rounded-lg" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <h1 className="text-xl font-bold text-white">Manage FAQs</h1>
        </div>

        <div className="hidden md:flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Manage FAQs</h1>
          <div className="text-sm text-gray-600">
            Selected: <span className="font-semibold text-blue-600">{selectedCategory}</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
            {error}
          </div>
        )}

        <div className="bg-[#071d34] rounded-lg shadow-md p-4 md:p-6 mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">FAQ Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              resetForm();
            }}
            className="w-full md:w-72 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {FAQ_CATEGORY_OPTIONS.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-[#071d34] rounded-lg shadow-md p-4 md:p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">
            {editingFaq ? `Edit ${selectedCategory} FAQ` : `Add ${selectedCategory} FAQ`}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="question"
              placeholder="Enter Question"
              value={form.question}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="answer"
              placeholder="Enter Answer"
              value={form.answer}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
              required
            />
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 font-semibold"
              >
                {editingFaq ? "Update FAQ" : "Add FAQ"}
              </button>
              {editingFaq && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 font-semibold"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-[#071d34] rounded-lg shadow-md overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">{selectedCategory} FAQs</h3>
            <span className="text-sm text-gray-600">Total: {faqs.length}</span>
          </div>

          {loading ? (
            <p className="p-6 text-slate-500">Loading FAQs...</p>
          ) : faqs.length === 0 ? (
            <p className="p-6 text-slate-500">No FAQs found for {selectedCategory}.</p>
          ) : (
            <div className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="p-4 md:p-6">
                  <p className="font-semibold text-gray-900 mb-2">Q: {faq.question}</p>
                  <p className="text-gray-700 mb-4">A: {faq.answer}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(faq)}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 font-semibold text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(faq.id)}
                      className="bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 font-semibold text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
