# ChoiceScript Stats Modifier

A set of browser-based tools for modifying stats in [ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/) games. Fork of [WestlyDust/ChoiceScript_Stats_Modifier](https://github.com/WestlyDust/ChoiceScript_Stats_Modifier), actively maintained here.

Full docs: https://choicescript-stats-modifier.readthedocs.io/en/latest/

## Cheat Master — quick start

Cheat Master opens a popup that emulates the in-game stats page and lets you edit numerical, boolean, and string stats (including bulk-apply for numerical stats).

Open your game in the browser, open DevTools (F12) → Console, and paste:

```js
var scriptCheats = document.createElement('script');
scriptCheats.src = 'https://cdn.jsdelivr.net/gh/JVS1328/ChoiceScript_Stats_Modifier@Main/CheatMaster/CheatMaster.js';
document.body.appendChild(scriptCheats);
```

A **Modify Stats** button will appear next to the game's regular buttons. Click it to open the editor.

**After editing, click the game's Next button** to commit your changes — navigating to another page (e.g. the stats screen) will revert them.

### Notes

- jsDelivr caches branch refs for up to ~12 hours. If a fix doesn't show up, append `?v=<anything>` to the URL or purge via `https://purge.jsdelivr.net/gh/JVS1328/ChoiceScript_Stats_Modifier@Main/CheatMaster/CheatMaster.js`.
- The script is idempotent — re-pasting the snippet cleanly reloads it.

## Other tools

| Tool | Purpose |
|---|---|
| `CheatMaster/` | Full editor: stat charts, numerical, boolean, and string stats |
| `CheatNumbers/` | Numbers-only editor |
| `CheatSelectable/` | Separate editors for numbers / booleans / strings |
| `CheatStatCharts/` | Stat-chart-only editor |
| `SaveSystem/` | Save/load manager |

See the [full documentation](https://choicescript-stats-modifier.readthedocs.io/en/latest/) for details on each.
