// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// To compare the given strings, first, we need to apply the backspaces. An efficient way to do this would be from the end of both the strings. We can have separate pointers, pointing to the last element of the given strings. We can start comparing the characters pointed out by both the pointers to see if the strings are equal. If, at any stage, the character pointed out by any of the pointers is a backspace (’#’), we will skip and apply the backspace until we have a valid character available for comparison.

function backspaceCompare(str1, str2) {

}


function getNextChar(str, index) {

}

backspaceCompare("xy#z", "xzz#")//true, After applying backspaces the strings become "xz" and "xz" respectively.
backspaceCompare("xy#z", "xyz#")//false, After applying backspaces the strings become "xz" and "xy" respectively.
backspaceCompare("xp#", "xyz##")//true, After applying backspaces the strings become "x" and "x" respectively.  In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
backspaceCompare("xywrrmp", "xywrrmu#p")//true, After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.