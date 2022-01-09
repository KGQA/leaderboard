# Compositional Freebase Questions

**Compositional Freebase Questions**<sup>[[1]](#myfootnote1)</sup> is a dataset for measuring compositional generalization in semantic parsing, which targets the task of parsing natural 
language questions into SPARQL queries executable on Freebase. It includes multiple train/test splits with maximally divergent examples in terms of compounds, 
generated using the Distribution-Based Compositionality Assessment (DBCA) method, while maintaining a low divergence in terms of primitive elements (atoms). 
In these splits, the test set is constrained to examples containing novel compounds, i.e., new ways of composing the atoms seen during training. This dataset
contains 239357 English question-answer pairs, which encompass 49320 question patterns and 34921 SPARQL query patterns.

This dataset can be downloaded via the [link](https://github.com/google-research/google-research/tree/master/cfq).

## Leaderboard 


## References 
<a name="myfootnote1">[1]</a> Keysers, D., Schärli, N., Scales, N., Buisman, H., Furrer, D., Kashubin, S., Momchev, N., Sinopalnikov, D., Stafiniak, L., Tihon, T. and Tsarkov, D., 2019. [Measuring compositional generalization: A comprehensive method on realistic data.](https://arxiv.org/pdf/1912.09713.pdf) arXiv preprint arXiv:1912.09713.


[Go back to the README](../README.md)