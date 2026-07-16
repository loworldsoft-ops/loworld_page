# AI color originals (SSOT)

Full-color PNGs generated from `scripts/ai-weapon-prompts.json` and `scripts/ai-equipment-prompts.json`.

| Folder | Count | IDs |
|---|---|---|
| `weapons/` | 20 | `weapon-*` |
| `equipment/` | 160 | armor, helmet, shield, boots, gloves, belt, ring, amulet |

These files are **Git-tracked** source assets. They are **not** served at runtime.

Processed 128×128 monochrome masks live in `../png/{category}/`.

```bash
# Rebuild masks after editing an original
npm run optimize:novel-item-icons
npm run assets:prepare
```

Optional: copy raw originals into `png/` before optimize:

```bash
npm run import:ai-weapons
npm run import:ai-equipment
```
