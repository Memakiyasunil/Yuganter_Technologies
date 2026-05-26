from pathlib import Path
import re
root = Path(r'C:\Users\Admin\Downloads\Yugantar_Technologies_Professional_Updated\Yuganter_Technologies-main')
patterns = [
    (re.compile(r'bg\\-\\[\\#0f172a\\]'), 'bg-[#071d34]'),
    (re.compile(r'bg\\-\\[\\#1e293b\\]'), 'bg-[#0f1f2f]'),
    (re.compile(r'bg\\-\\[\\#0b1120\\]'), 'bg-[#071d34]'),
    (re.compile(r'bg\\-\\[\\#0f172a\\]\\/5'), 'bg-[#071d34]/5'),
    (re.compile(r'bg\\-\\[\\#0f172a\\]\\/10'), 'bg-[#071d34]/10'),
    (re.compile(r'hover:bg\\-\\[\\#0f172a\\]\\/10'), 'hover:bg-[#071d34]/10'),
    (re.compile(r'hover:bg\\-\\[\\#0f172a\\]'), 'hover:bg-[#071d34]'),
    (re.compile(r'bg\\-\\[\\#1e293b\\]\\/\\[0\\.08\\]'), 'bg-[#0f1f2f]/[0.08]'),
    (re.compile(r'background:\\s*#1e293b'), 'background: #071d34'),
    (re.compile(r'background:\\s*#0b1120'), 'background: #071d34'),
]
count = 0
for path in root.rglob('*'):
    if path.is_file() and path.suffix in {'.js', '.jsx', '.css'} and 'node_modules' not in path.parts:
        text = path.read_text(encoding='utf-8')
        new = text
        for pat, rep in patterns:
            new = pat.sub(rep, new)
        if new != text:
            path.write_text(new, encoding='utf-8')
            print('Updated', path)
            count += 1
print('Total updated', count)
