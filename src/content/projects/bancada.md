---
title: Bancada
description: "A lightweight workbench for quick LLM experiments: run a prompt and a dataset through several models side by side, then score the answers. No code needed."
repo: https://github.com/marcornv/bancada
image: ./images/bancada.png
imageAlt: Bancada results page comparing three local models by calls, tokens, latency, cost and evaluation score.
tags: [AI, Go, React, Python, Docker]
order: 1
---

Bancada (Portuguese for "workbench") is a small web app that runs on your own computer, for quick LLM experiments without writing code. Full experiment-tracking platforms are great when you need them. Sometimes you just want a prompt, a dataset, a few models and the results side by side, scored the way your use case needs.

It's made for developers trying out prompts and models, teams measuring the quality of their LLM outputs, researchers who want to see how LLMs do on their own use case without learning to code, and anyone building an LLM judge who needs to check that it works before relying on it.

- **Experiments:** write a prompt with `{column}` placeholders filled from a CSV (or use images) and run it across OpenAI, Claude, Gemini or local models through Ollama, side by side.
- **Results:** every answer per input, with tokens, latency and cost, plus a cost estimate before you run anything.
- **Evaluators:** set up your own and score answers against expected results with an LLM judge and rubric, embedding similarity, text or regex rules, or Ragas-style metrics.
- **Evaluate results you already have:** got a CSV of documents and previous outputs? Run the evaluators on it directly, with no experiment needed. Add your own verdicts and Bancada shows how often the evaluator agrees with you and suggests the best threshold.
- **Plain YAML files** for everything, so experiments are easy to reproduce and keep in Git.
- **Free and open source:** runs only on your machine, in Portuguese or English, and the README has a step-by-step guide for people who have never used a terminal.
