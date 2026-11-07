---
title: Bancada
description: "A test bench for AI language models: run the same data through several models side by side and compare their cost, speed and answer quality. No coding needed."
repo: https://github.com/marcornv/ai-workstation
image: ./images/bancada.png
imageAlt: Bancada results page comparing three local models by calls, tokens, latency, cost and evaluation score.
tags: [AI, Go, React, Python, Docker]
order: 1
---

A test bench for language models, made for people who don't write code. Run the same data through several models (OpenAI, Claude, Gemini or free models running on your own computer with Ollama), compare tokens, speed and cost, and score the quality of the answers. Everything happens in a web page on your own machine.

- **Experiments:** one prompt with `{column}` placeholders, a spreadsheet (CSV/JSONL) or a folder of images as input, and several models side by side.
- **Results:** every model's answer for every input, with tokens, latency (p50/p95), an estimated cost before running, the real cost after, and CSV export.
- **Evaluators:** score each answer from 0 to 1 with Ragas-style metrics, an AI judge following your own rubric, embedding similarity, simple text or regex rules, or decision models that answer with probabilities.
- **Test an evaluator with a spreadsheet:** compare its scores with your own verdicts, see where it is too strict or too lenient, and get the best threshold.
- **Images:** send photos, receipts or screenshots along with the prompt to models that can see.
- **Plain files:** experiments and evaluators are YAML files you can edit in the interface or by hand, and keep in Git.
- **No surprise bills:** nothing runs on a paid API until you have seen the cost estimate and confirmed.
- **Easy to set up:** one Docker command. Portuguese or English interface. Runs only on your machine. MIT licensed.
