---
title: Default Renderer
order: 10
tag:
  - basic
category:
  - renderer
---

# {{ $frontmatter.title }}

_DefaultRenderer_ is the main renderer of `listr2`.

<!-- more -->

_DefaultRenderer_ is intended for `TTY` environments with `vt100` terminal compatibility, where it updates the current update constantly depending on the changes in _Task_. This renderer has many options for customization, these options can be changed at _Listr_, _Subtask_ or _Task_ level.

This renderer uses _ProcessOutput_ to take control of the terminal.

![demo](../../examples/renderer-default.gif)

## Renderer Options

::: details

<!-- @include: ../api/listr2/interfaces/interface.ListrDefaultRendererOptions.md -->

:::

## Renderer Task Options

::: details

<!-- @include: ../api/listr2/interfaces/interface.ListrDefaultRendererTaskOptions.md -->

:::
