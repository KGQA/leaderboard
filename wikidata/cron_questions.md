# CronQuestions

**CronQuestions**<sup>[[1]](#myfootnote1)</sup> is the largest known Temporal KGQA dataset, clearly stratified into buckets of structural complexity. CronQuestions expands the only known previous dataset by a factor of 340×.
This dataset consists of two parts: a KG with temporal annotations, and a set of natural language questions requiring temporal reasoning. Temporal KG was prepared by taking all facts with temporal 
annotations from the WikiData subset. The QA dataset was generated with a set of templates for temporal reasoning. These were made using the five most frequent relations from our WikiData subset, namely
_member of sports team_, _position held_, _award received_, _spouse_, and _employer_. 

## Leaderboard: Overall

| Model / System | Year  | Hits@1 | Hits@10 |                         Reported by                          |
|:--------------:|:-----:|:------:|:-------:|:------------------------------------------------------------:|
|      BERT      | 2021  | 0.071  |  0.213  |    [Saxena et. al.](https://arxiv.org/pdf/2106.01515.pdf)    |
|      BERT      | 2021  | 0.243  |  0.620  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |
|    RoBERTa     | 2021  | 0.225  |  0.585  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |
|    RoBERTa     | 2021  |  0.07  |  0.202  |    [Saxena et. al.](https://arxiv.org/pdf/2106.01515.pdf)    |
|    KnowBERT    | 2021  |  0.07  |  0.201  |    [Saxena et. al.](https://arxiv.org/pdf/2106.01515.pdf)    |
|     T5-3B      | 2021  | 0.081  |    -    |    [Saxena et. al.](https://arxiv.org/pdf/2106.01515.pdf)    |
|   EmbedKGQA    | 2021  | 0.288  |  0.672  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |
|   T-EaE-add    | 2021  | 0.278  |  0.663  |    [Saxena et. al.](https://arxiv.org/pdf/2106.01515.pdf)    |
|      EaE       | 2021  | 0.288  |  0.678  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |
|    CronKGQA    | 2021  | 0.647  |  0.884  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |
|    EntityQR    | 2021  | 0.745  |  0.944  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |
|  TempoQR-Soft  | 2021  | 0.799  |  0.957  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |
|  TempoQR-Hard  | 2021  | 0.918  |  0.978  |  [Mavromatis et. al.](https://arxiv.org/pdf/2112.05785.pdf)  |


## References
<a name="myfootnote1">[1]</a> Saxena, Apoorv, Soumen Chakrabarti, and Partha Talukdar. [Question Answering Over Temporal Knowledge Graphs.](https://arxiv.org/abs/2106.01515) arXiv preprint arXiv:2106.01515 (2021).


[Go back to the README](../README.md)