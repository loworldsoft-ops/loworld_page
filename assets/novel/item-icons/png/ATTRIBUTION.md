# Novel item icons (raster, full-color)

> Processed: 2026-07-08  
> Format: 128×128 PNG, AI 원본색 유지, PNG compression  
> Pipeline: `npm run optimize:novel-item-icons`

| Category | Source | Count |
|---|---|---|
| weapon | AI-generated color PNG → 128×128 resize | 20 |
| armor–amulet | AI-generated color PNG → 128×128 resize | 160 |

Weapon prompts: `scripts/ai-weapon-prompts.json`  
Equipment prompts: `scripts/ai-equipment-prompts.json`  
Import: `npm run import:ai-equipment` (160) / `npm run import:ai-weapons` (20)  
Regenerate: edit `source-ai/equipment/` or `source-ai/weapons/` then `npm run optimize:novel-item-icons && npm run assets:prepare`
