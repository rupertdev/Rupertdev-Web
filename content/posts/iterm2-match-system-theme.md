---
title: "Make iTerm2 Follow MacOS System Theme"
description: "Add this script to your iTerm2 to force it to switch color theme when MacOS System theme changes."
date: 2020-01-14
---
## Problem
When switching system themes on MacOS, which I do depending on ambient light and time of day, iTerm2 does not automatically switch to a light or dark theme.

## Solution
With this script [(Gist)](https://gist.github.com/rupertdev/c88e63aa716466c396aabf7ce769448c), iTerm2 will periodically check the MacOS system theme and switch between two defined color themes. See here:
```python
#!/usr/bin/env python3

# To Use: In iterm2, select Manage -> New Python Script, Basic script, daemon mode. Install python runtime if necessary and then paste in script, replace my themes with your chosen light and dark themes, save. In Scripts, uncheck and recheck your new script.

import asyncio
import iterm2

from subprocess import run
from time import sleep


async def main(connection):
    while True:
        # Block until theme changes
        p = run(['defaults', 'read', '-g', 'AppleInterfaceStyle'])
        # Themes have space-delimited attributes, one of which will be light or dark.
        if p.returncode == 0:
            preset = await iterm2.ColorPreset.async_get(connection, "Night Owl")
        else:
            preset = await iterm2.ColorPreset.async_get(connection, "Solarized Light")

        # Update the list of all profiles and iterate over them.
        profiles = await iterm2.PartialProfile.async_query(connection)
        for partial in profiles:
            # Fetch the full profile and then set the color preset in it.
            profile = await partial.async_get_full_profile()
            await profile.async_set_color_preset(preset)
        sleep(1)

iterm2.run_forever(main)
```

## Instructions:
1. In iTerm, select Manage -> New Python Script (Basic Script, Daemon Mode)
2. Install Python runtime if necessary (python3)
3. Paste script into editor
4. Modify defined color themes with your themes of choice, save
5. In Scripts menu, check, uncheck, recheck your script.
6. Done, colors!