# GrailQA

**GrailQA** (Strongly Generalizable Question Answering)<sup>[[1]](#myfootnote1)</sup> is a new large-scale, high-quality dataset for question answering on knowledge bases (KBQA) on Freebase with 64,331 questions annotated with both answers and corresponding logical forms in different syntax (i.e., SPARQL, S-expression, etc.). 
It can be used to test three levels of generalization in KBQA: i.i.d., compositional, and zero-shot. Please see the original [paper](https://arxiv.org/abs/2011.07743) and check out the [link](https://dki-lab.github.io/GrailQA/) for more details.

This dataset can be downloaded via the [link](https://dki-lab.github.io/GrailQA/).

Here, the SOTA evaluation results of GrailQA are copied from its original main leaderboard, please check out the [link](https://dki-lab.github.io/GrailQA/) if you want to see more details.
All copyrights belong to the authors of this dataset.

## Leaderboard: Overall

|          Model / System           | Year |   EM   |   F1   |                        Reported by                         |
|:---------------------------------:|:----:|:------:|:------:|:----------------------------------------------------------:|
|      RnG-KBQA (single model)      | 2021 | 68.778 | 74.422 |     [Ye et. al.](https://arxiv.org/pdf/2109.08678.pdf)     |
|        S2QL (single model)        | 2021 | 57.456 | 66.186 |                         Anonymous                          |
|      ReTraCk (single model)       | 2021 | 58.136 | 65.285 | [Chen et. al.](https://aclanthology.org/2021.acl-demo.39/) |
|      ArcaneQA (single model)      | 2021 | 57.872 | 64.924 |                         Anonymous                          |
|    BERT+Ranking (single model)    | 2021 | 50.578 | 57.988 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
|   GloVe+Ranking (single model)    | 2021 | 39.521 | 45.136 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
| BERT+Transduction (single model)  | 2021 | 33.255 | 36.803 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
| GloVe+Transduction (single model) | 2021 | 17.587 | 18.432 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |

## Leaderboard: Compositional Generalization 

|          Model / System           | Year |   EM   |   F1   |                        Reported by                         |
|:---------------------------------:|:----:|:------:|:------:|:----------------------------------------------------------:|
|      RnG-KBQA (single model)      | 2021 | 63.792 | 71.156 |     [Ye et. al.](https://arxiv.org/pdf/2109.08678.pdf)     |
|      ReTraCk (single model)       | 2021 | 61.499 | 70.911 | [Chen et. al.](https://aclanthology.org/2021.acl-demo.39/) |
|        S2QL (single model)        | 2021 | 54.716 | 64.679 |                         Anonymous                          |
|      ArcaneQA (single model)      | 2021 | 56.395 | 63.533 |                         Anonymous                          |
|    BERT+Ranking (single model)    | 2021 | 45.510 | 53.890 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
|   GloVe+Ranking (single model)    | 2021 | 39.955 | 47.753 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
| BERT+Transduction (single model)  | 2021 | 31.040 | 35.985 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
| GloVe+Transduction (single model) | 2021 | 16.441 | 18.507 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |

## Leaderboard: Zero-shot Generalization

|          Model / System           | Year |   EM   |   F1   |                        Reported by                         |
|:---------------------------------:|:----:|:------:|:------:|:----------------------------------------------------------:|
|      RnG-KBQA (single model)      | 2021 | 62.988 | 69.182 |     [Ye et. al.](https://arxiv.org/pdf/2109.08678.pdf)     |
|        S2QL (single model)        | 2021 | 55.122 | 63.598 |                         Anonymous                          |
|      ArcaneQA (single model)      | 2021 | 49.964 | 58.844 |                         Anonymous                          |
|    BERT+Ranking (single model)    | 2021 | 48.566 | 55.660 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
|      ReTraCk (single model)       | 2021 | 44.561 | 52.539 | [Chen et. al.](https://aclanthology.org/2021.acl-demo.39/) |
|   GloVe+Ranking (single model)    | 2021 | 28.886 | 33.792 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
| BERT+Transduction (single model)  | 2021 | 25.702 | 29.300 |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |
| GloVe+Transduction (single model) | 2021 | 2.968  | 3.123  |       [Gu et. al.](https://arxiv.org/abs/2011.07743)       |

## References
<a name="myfootnote1">[1]</a> Gu, Yu, Sue Kase, Michelle Vanni, Brian Sadler, Percy Liang, Xifeng Yan, and Yu Su. [Beyond IID: three levels of generalization for question answering on knowledge bases.](https://arxiv.org/abs/2011.07743) In Proceedings of the Web Conference 2021, pp. 3477-3488. 2021.

[Go back to the README](../../README.md)