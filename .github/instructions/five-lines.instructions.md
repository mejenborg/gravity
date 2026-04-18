---
description: Use when writing or refactoring code to enforce the Five Lines of Code discipline. Keep methods small, extract methods aggressively, and preserve behavior through tiny safe steps.
name: Five Lines Refactoring Discipline
applyTo: "**/*.ts, **/*.js"
---

# Five Lines Refactoring Discipline

Goal

- Keep each function or method at five executable lines or fewer to maximize readability and maintainability.

Scope

- Applies to production code across all programming languages.
- Tests, examples, and one-off scripts are optional scope unless explicitly requested.

Line counting

- Count one line per statement: assignment, call, return, throw, if, else if, else, for, while, and switch case.
- Ignore blank lines and braces.
- Treat a wrapped multi-line expression as one statement when it is a single syntactic statement.

Default workflow

1. Identify functions above five lines.
2. Extract coherent blocks into well-named helpers.
3. Re-run compiler or static checks after each small step.
4. Repeat until all touched functions comply.

Refactoring preferences

- Prefer extraction over clever one-liners.
- Keep one abstraction level per function.
- If branch chains stay long, move behavior into polymorphism or small specialized helpers.
- Use method names to communicate intent; avoid comments that only restate code.
- Inline trivial pass-through helpers when they no longer improve readability.

Safety rules

- Preserve behavior; do not combine feature changes with structural refactors in the same step.
- Keep changes small and reversible.
- If you must defer full compliance, make the exception local and explicit.

Strictness mode

- Treat this as a strong default preference, not an absolute gate.
- Enforce by default and provide a short justification when keeping a method above five lines.

Allowed exceptions

- Generated code.
- Boundary adapters for external protocols or schemas when strict splitting harms clarity.
- Measured performance hot paths, with a short justification in the final summary.

Response contract for Copilot

- Proactively apply this discipline in all modified code.
- If full compliance is not practical, explicitly list remaining over-limit functions and why.
- Include a brief line-count check in the final response for touched functions.
