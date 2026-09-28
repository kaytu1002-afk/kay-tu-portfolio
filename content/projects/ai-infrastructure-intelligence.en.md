---
title: AI Infrastructure Intelligence
subtitle: A research system connecting physical capacity, deployment, revenue and cash flow
type: Technology Research · Data Automation
status: Active
role: Research design, data modelling and automation
period: 2026 — Present
tools: Python · SEC filings · Excel
---
## Overview
A research and data project for analysing how AI infrastructure companies build capacity, finance expansion, win customers and convert deployment into revenue. The scope spans compute clouds, data centres, power, networking, memory and chips.

## Problem
Industry narratives often mix power capacity, completed data centres, deployed GPUs, contracted demand and recognised revenue. These metrics sit at different stages and are not interchangeable.

## Why it matters
Connecting physical milestones to financial outcomes makes it possible to judge whether growth is real, capital is being deployed effectively and where execution risk is concentrated.

## Approach
- Extract SEC filings, earnings materials, transcripts and investor presentations
- Normalise capex, MW, GPU, contract, RPO, financing and dilution metrics
- Build company-level timelines with source evidence
- Separate capacity announcements, deployment, acceptance, revenue and cash collection

## Research framework
The core chain is: power → data-centre capacity → GPU deployment → customer contract → deployment → customer acceptance → revenue recognition → cash flow. Each node requires its own evidence and timing assumptions.

## Early findings
Comparisons break most often on unit definitions and timing. MW, GPU counts and contract values need to be interpreted alongside availability dates, utilisation, contract structure and financing terms.

## Limitations
Disclosure varies by company, some contracts are confidential and automated extraction still needs human review. The system should retain source excerpts and label inference confidence.

## Next steps
Build a reusable data schema, cover an initial company set and automate the path from source updates to metric-change alerts.
