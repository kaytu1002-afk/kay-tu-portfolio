---
title: The Last Twelve Weeks
subtitle: An LLM narrative experiment in memory, state and consistency
type: LLM Product Experiment · Interactive Narrative
status: Prototype
role: Product design, narrative systems and prompt architecture
period: 2025 — 2026
tools: LLMs · FastGPT · Prompt architecture
---
## Overview
The Last Twelve Weeks is a multi-turn AI narrative. Players manage a base, relationships and resources under a fixed time horizon while the system maintains world state and character consistency across a long conversation.

## Product problem
Open-ended language creates freedom, but also state drift, inconsistent characters and invented rules. How can players feel genuine agency while the story remains causally coherent?

## Design principles
- Separate world state from natural-language narration
- Give characters stable motivations, memory boundaries and relationship changes
- Make important choices create traceable consequences
- Balance free input with controllable branches

## System approach
Each turn updates structured state: remaining weeks, resources, relationships, known facts and unresolved events. The narrative layer reads that state before generating the next scene and options.

## Interaction design
The interface keeps system mechanics quiet so attention stays on situation and choice. Resource or relationship changes appear only when that feedback helps players understand consequences.

## What I learned
Prompts are only one layer. Reliable LLM experiences depend more on state models, context selection, failure handling and explicit product boundaries.

## Limitations
Long-context cost, model updates and open input still affect consistency. Narrative quality is also subjective and requires both log analysis and player interviews.

## Next steps
Implement independent state storage, create replayable test scenarios and evaluate character and plot stability across models.
