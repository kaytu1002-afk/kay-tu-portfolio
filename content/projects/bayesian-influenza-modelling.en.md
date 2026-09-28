---
title: Bayesian Influenza Modelling
subtitle: Statistical modelling of mortality dynamics around the 1918–1919 influenza pandemic
type: Quantitative Research · Academic Project
status: Complete
role: Modelling, analysis and interpretation
period: University project
tools: R · Stan · Bayesian inference
---
## Overview
This project used Bayesian inference to study mortality dynamics around the 1918–1919 influenza pandemic, estimating latent trends and uncertainty from limited, noisy historical data.

## Problem
Historical mortality data may contain missing observations, measurement error and structural change. A single point estimate cannot communicate the credible range of conclusions or expose the assumptions driving them.

## Why Bayesian methods
A Bayesian framework combines prior information, observed data and parameter uncertainty, with posterior distributions making the range of outcomes directly interpretable.

## Approach
- Clean and explore data in R
- Define the probabilistic model and run sampling in Stan
- Check convergence, posterior predictions and parameter sensitivity
- Communicate results through intervals and distributions, not only point estimates

## Interpretation
The aim was not to produce artificially precise historical numbers, but to understand how mortality dynamics changed and how strongly alternative assumptions affected the conclusion.

## What I learned
Model transparency matters as much as computational correctness. Clear records of priors, data limitations and diagnostics are fundamental to trustworthy quantitative work.

## Limitations
Historical data quality constrains identification, while model structure influences trend estimates. Conclusions should be read as evidence under stated assumptions rather than fixed facts.

## Next steps
Compare alternative models, incorporate richer regional data and evaluate robustness through more systematic model checks.
