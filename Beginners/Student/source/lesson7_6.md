# Lesson 7: What are regular expressions?

## How do we write regular expressions?

[Here](https://docs.python.org/3/howto/regex.html) is a link to a how-to page for Python regular expressions. I still reference this pretty much every time I want to use regular expressions, so you might want to bookmark that link.

If you want the complete documentation, you can visit [this](https://docs.python.org/3/library/re.html) link

Anyway

There are various tiers of regexs

### Simple regex
This is when each character in the regular expression matches itself. Some examples include `"match"`, `"this"`, etc.

When searching for matches using these regexs, they will only match themselves perfectly

### Metacharacters

- `]` and `[`
  - Brackets define a character class
  - For example, if you wanted to match a, b, or c, you could write `[abc]`
  - You could also use a `-` to specify a range. To match a, b, or c, you could write `[a-c]`. To match lowercase characters, you could write `[a-z]`
- `^`
  - This negates a character class
  - If you wanted to match anything BUT a, b, or c, you could write `[^a-z]`
- `\`
  - Backslashes are quite important because they can negate the specialness of metacharacters or precede a special character
  - For example, if you wanted to match opening then closing square brackets, you can't simply use `[]`. You have to use `\[\]`
- `.`
  - Matches anything **BUT** newline characters

These aren't all of the possible metacharacters, but instead some of the more useful ones. You can find more [here](https://docs.python.org/3/howto/regex.html#matching-characters)

### Repeating characters

- The asterisk is used to repeat the preceding character or character class at least 0 times.
  - For example, `ca*t` will match `"ct"`, `"cat"`, `"caat"`, etc.
  - You can also use this with character classes and special regex (which we'll cover in a minute)
  - For example: `abcd[a-z]*efg` will match `"abcdefg"`, `"abcdaaaaaefg"`, `"abcdabcdefghijkefg"`, etc.

- The plus sign is used to repeat the preceding character or class **at least once**
  - For example: `abcd[a-z]+efg` will match `"abcdaaaaaaaaaefg"` and `"abcdaaaaaefg"`, but will **NOT** match `"abcdefg"`

### Special Regex
This is when you use special characters in your regular expression. This is detailed further in the documentation.

These are some of the special characters you can use. More can be found [here](https://docs.python.org/3/library/re.html#re-syntax)

- `/d`
  - Matches any decimal digit --> `[0-9]`
- `/D`
  - Matches anything **BUT** decimal digits --> `[^0-9]`
- `/s`
  - Matches any whitespace character --> `[ \t\n\r\f\v]`
- `/S`
  - Matches anything **BUT** whitespace characters --> `[^ \t\n\r\f\v]``
- `/w`
  - Matches any alphanumeric character --> `[a-zA-Z0-9_]`
- `/W`
  - Matches anything **BUT** alphanumeric characters --> `[^a-zA-Z0-9_]`

[Back](lesson7_5.html) | [Next](lesson7_7.html)
