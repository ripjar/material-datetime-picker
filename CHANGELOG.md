# Changelog

# 2.0.3
* Bugfix: show calendar and clock icons in Firefox - #114

## 2.0.2
* Bugfix: fire `change` and `change:time` events when the selected time changes - bf5d62095e9e4faa9b948a3a53fda9898b1d1810
* Bugfix: do not reset time to 00:00 when clicking on the selected date - bbdc188c5508afed73ad3cb60ec43f2991d3c48f

## 2.0.1
* Bugfix: fix active hour indicator - #107 by @CasperLaiTW
* Bugfix: show the active time when the picker is opened - #107 by @CasperLaiTW

## 2.0.0

* Breaking: Updated the build process to use rollup instead of browserify. Change the path to compiled files. - #99
* Bugfix: Select the correct time when switching am/pm - #97
* Bugfix: Select the correct date when opening the picker - 5313258f70c92923e0060ca193f89c88895ff01c
