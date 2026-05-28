import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { blogAPI } from "../services/blogAPI";

const EMPTY_FORM = {
  title: "",
  description: "",
  category: "",
  readTime: "",
  externalUrl: "",
  slug: "",
  color: "from-blue-500 to-cyan-400",
};

const COLOR_OPTIONS = [
  { label: "Blue/Cyan", value: "from-blue-500 to-cyan-400" },
  { label: "Purple/Pink", value: "from-purple-500 to-pink-500" },
  { label: "Orange/Yellow", value: "from-orange-500 to-yellow-500" },
  { label: "Green/Emerald", value: "from-green-500 to-emerald-400" },
  { label: "Indigo/Blue", value: "from-indigo-500 to-blue-500" },
  { label: "Red/Rose", value: "from-red-500 to-rose-400" },
  { label: "Sky/Blue", value: "from-sky-500 to-blue-500" },
  { label: "Cyan/Teal", value: "from-cyan-500 to-teal-500" },
  { label: "Gray/Slate", value: "from-gray-500 to-slate-500" },
];

export default function AdminBlogs() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalBlogs = useMemo(() => blogs.length, [blogs.length]);

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
      return;
    }
    loadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const loadBlogs = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await blogAPI.getAll();
      setBlogs(data);
    } catch (err) {
      setError(err?.message || "Failed to load blogs.");
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
    setEditingBlog(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      setError("Blog Title and Description are required.");
      return;
    }
    if (!form.category.trim()) {
      setError("Category is required.");
      return;
    }
    if (!form.readTime.trim()) {
      setError("Read Time is required.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      if (editingBlog) {
        const updated = await blogAPI.update(editingBlog.id, {
          title: form.title.trim(),
          description: form.description.trim(),
          category: form.category.trim(),
          readTime: form.readTime.trim(),
          externalUrl: form.externalUrl.trim(),
          slug: form.slug.trim(),
          color: form.color.trim(),
        });
        setBlogs((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
      } else {
        const created = await blogAPI.create({
          title: form.title.trim(),
          description: form.description.trim(),
          category: form.category.trim(),
          readTime: form.readTime.trim(),
          externalUrl: form.externalUrl.trim(),
          slug: form.slug.trim(),
          color: form.color.trim(),
        });
        setBlogs((prev) => [...prev, created]);
      }
      resetForm();
    } catch (err) {
      setError(err?.message || "Unable to save blog.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setForm({
      title: blog.title || "",
      description: blog.description || "",
      category: blog.category || "",
      readTime: blog.readTime || "",
      externalUrl: blog.externalUrl || "",
      slug: blog.slug || "",
      color: blog.color || EMPTY_FORM.color,
    });
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    setLoading(true);
    setError("");
    try {
      await blogAPI.delete(id);
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      setError(err?.message || "Unable to delete blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onLogout={handleLogout} />

      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button className="bg-blue-600 text-white p-2 rounded-lg" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <h1 className="text-xl font-bold text-gray-800">Manage Blogs</h1>
        </div>

        <div className="hidden md:flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
          <div className="text-sm text-gray-600">
            Total Blogs: <span className="font-semibold text-blue-600">{totalBlogs}</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">{editingBlog ? "Update Blog" : "Add Blog"}</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Blog Title</label>
              <input
                name="title"
                placeholder="Enter Blog Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                placeholder="Enter Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <input
                name="category"
                placeholder="e.g., Web Development"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Read Time</label>
              <input
                name="readTime"
                placeholder='e.g., "5 min read" or "External article"'
                value={form.readTime}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Slug</label>
              <input
                name="slug"
                placeholder="e.g., web-development-trends"
                value={form.slug}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">External URL</label>
              <input
                name="externalUrl"
                placeholder="https://..."
                value={form.externalUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Leave empty to show “Coming Soon” on the website.</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Card Color</label>
              <select
                name="color"
                value={form.color}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {COLOR_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 font-semibold"
              >
                {editingBlog ? "Update Blog" : "Add Blog"}
              </button>
              {editingBlog && (
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

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Blogs</h3>
            <span className="text-sm text-gray-600">Total: {blogs.length}</span>
          </div>

          {loading ? (
            <p className="p-6 text-gray-500">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="p-6 text-gray-500">No blogs found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Title</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Category</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Read Time</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Slug</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">External URL</th>
                    <th className="p-4 text-center text-sm font-bold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {blogs.map((b) => (
                    <tr key={b.id} className="hover:bg-blue-50 transition-colors align-top">
                      <td className="p-4 text-sm font-medium text-gray-900">
                        <div className="max-w-[420px]">
                          <div className="font-semibold">{b.title}</div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-2">{b.description}</div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700">{b.category}</td>
                      <td className="p-4 text-sm text-gray-700">{b.readTime}</td>
                      <td className="p-4 text-sm text-gray-700">{b.slug}</td>
                      <td className="p-4 text-sm text-gray-700">
                        {b.externalUrl ? (
                          <a
                            href={b.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            {b.externalUrl}
                          </a>
                        ) : (
                          <span className="text-gray-500 font-semibold">Coming Soon</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleEdit(b)}
                            className="bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 font-semibold text-sm transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(b.id)}
                            className="bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 font-semibold text-sm transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

