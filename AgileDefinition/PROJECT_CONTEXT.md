# SN Workout Project Context

## Product Goal

Build a ServiceNow-based workout application that allows users to:

- Define reusable exercises.
- Organize exercises in hierarchical categories.
- Build reusable sets (including nested sets).
- Define session templates.
- Generate and execute workout sessions.
- Track execution outcomes and provide statistics.

## Architecture and Implementation Direction

- Backend is ServiceNow table model + Script Include business logic.
- Table-centric logic pattern:
  - `Custom_Object` parent behavior.
  - Child Script Includes per table with `TABLE_NAME` targeting.
  - `GlobalUtil` for cross-app helpers.
  - `WorkoutUtil` for app-domain helpers.
- Frontend expected from ServiceNow Portal or UI Builder.

## Core Domain Rules

- An exercise contains: preparation duration, effort duration, rest duration.
- Categories are hierarchical (parent-child).
- Sets inherit exercise but can override durations.
- Exercise-Set links can include nested sets.
- No cycles allowed in set composition.
- Session Definition supports:
  - Type (set-based or category-based)
  - Repetition
  - Shuffle
  - Infinite mode
- Session snapshots selected definition properties so historical sessions remain stable if definition changes later.
- Session Exercise tracks state: not started, done, skipped.

## Primary Tables (Business View)

- Exercise
- Category
- Set (inherits Exercise)
- Exercise Category (m2m)
- Exercise Set (m2m)
- Session Definition
- Session
- Session Exercise
- Session Category (m2m + weight)
- Session Set (m2m + repetition)

## Agile Focus

Backlog prioritizes:

1. Correct data model behavior and validation.
2. Reusable workout building blocks (exercise, category, set).
3. Reliable session generation/execution flows.
4. Traceable, testable server-side logic.
5. Security and data integrity for scoped app use.
