# MKQA

**MKQA**<sup>[[1]](#myfootnote1)</sup> MKQA is an open-domain question answering evaluation set comprising 10k question-answer pairs aligned across 26 
typologically diverse languages (260k question-answer pairs in total). 
MKQA selects 10k realistic English queries from the Natural Questions dataset (NQ, Kwiatkowski et al., 2019) 
and human translates them into 25 additional languages and dialects. 
Accompanying these query translations the dataset offers language- and retrieval-independent answer annotations, 
Wikidata entities IDs and value types.

This dataset can be downloaded via the [link](https://github.com/apple/ml-mkqa).

### Leaderboard

| Model / System |Year|Precision|Recall| F1  |Language|                       Reported by                       |
|:--------------:|:---:|:-------:|:----:|:---:|:------:|:-------------------------------------------------------:|
|  (Baseline) XLM-R Large Translate Train	 |2020|   -    |  -  | 46  |   EN   |[Longpre S et al.](https://arxiv.org/pdf/2007.15207.pdf)|
|  ChatGPT   	 |2023|    -    |  -   |44.30|   EN    |[Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)|
|    GPT-3.5v3   |2023|    -    |  -   |39.05|   EN    |[Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)|
|    GPT-3.5v2   |2023|    -    |  -   |30.14|   EN    |[Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)|
|    GPT-3   	 |2023|    -    |  -   |26.97|   EN    |[Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)|
|  FLAN-T5   	 |2023|    -    |  -   |20.17|   EN    |[Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)|


## References
<a name="myfootnote1">[1]</a> Shayne Longpre, Yi Lu, Joachim Daiber: MKQA: A Linguistically Diverse Benchmark for Multilingual Open Domain Question Answering. CoRR abs/2007.15207 (2020)


[Go back to the README](../README.md)
