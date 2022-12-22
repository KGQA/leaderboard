# Compositional Wikidata Questions (CWQ)

**Compositional Wikidata Questions (CWQ)**<sup>[[1]](#myfootnote1)</sup> is a multilingual KBQA dataset grounded in and executable over Wikidata. Our dataset includes questions in four languages (Hebrew, Kannada, Chinese and English), and their associated SPARQL queries.

This dataset can be downloaded via the [link](https://github.com/coastalcph/seq2sparql). 

## Leaderboard

The evaluation metric is Exact Match (%).

### MCD 1
| Model / System | Year  | Lang_En | Lang_He | Lang_Kn | Lang_Zh |                    Reported by                    |
|:--------------:|:-----:|:-------:|:-------:|:-------:|:-------:|:-------------------------------------------------:|
| LSTM+Attention | 2021  |  38.2   |  29.3   |  27.1   |  26.1   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| E.Transformer  | 2021  |  53.3   |   35    |  30.7   |   31    | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|     mBERT      | 2021  |  49.5   |  38.7   |  34.4   |  35.6   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|  T5-base+RIR   | 2021  |  57.4   |    -    |    -    |    -    | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| mT5-small+RIR  | 2021  |  77.6   |  57.8   |   55    |  52.8   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|   mT5-base+RIR   | 2021  |   55.5   |   59.5   |   49.1   |   30.2   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |


### MCD 2
| Model / System | Year  | Lang_En | Lang_He | Lang_Kn | Lang_Zh |                    Reported by                    |
|:--------------:|:-----:|:-------:|:-------:|:-------:|:-------:|:-------------------------------------------------:|
| LSTM+Attention | 2021  |   6.3   |   5.6   |   9.9   |   7.5   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| E.Transformer  | 2021  |  16.5   |   8.7   |  11.9   |  10.2   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|     mBERT      | 2021  |  13.4   |  11.4   |  12.3   |  15.1   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|  T5-base+RIR   | 2021  |  14.6   |    -    |    -    |    -    | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| mT5-small+RIR  | 2021  |   13    |  12.6   |   8.2   |  21.1   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|   mT5-base+RIR   | 2021  |   27.7   |   16.6   |   16.6   |    23    | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |


### MCD 3
| Model / System | Year  | Lang_En | Lang_He | Lang_Kn | Lang_Zh |                    Reported by                    |
|:--------------:|:-----:|:-------:|:-------:|:-------:|:-------:|:-------------------------------------------------:|
| LSTM+Attention | 2021  |  13.6   |  11.5   |  15.7   |  15.1   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| E.Transformer  | 2021  |  18.2   |   13    |  18.1   |  15.5   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|     mBERT      | 2021  |   17    |   18    |  18.1   |  19.4   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|  T5-base+RIR   | 2021  |  12.3   |    -    |    -    |    -    | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| mT5-small+RIR  | 2021  |  24.3   |  17.5   |  31.4   |  34.9   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|   mT5-base+RIR   | 2021  |   18.2   |   23.4   |   30.5   |   35.6   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |


### MCD mean
MCD mean is the mean accuracy of all three MCD splits.

| Model / System | Year  | Lang_En | Lang_He | Lang_Kn | Lang_Zh |                    Reported by                    |
|:--------------:|:-----:|:-------:|:-------:|:-------:|:-------:|:-------------------------------------------------:|
| LSTM+Attention | 2021  |  19.4   |  15.5   |  17.6   |  16.2   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| E.Transformer  | 2021  |  29.3   |  18.9   |  20.2   |  18.9   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|     mBERT      | 2021  |  26.6   |  22.7   |  21.6   |  23.4   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|  T5-base+RIR   | 2021  |  28.1   |    -    |    -    |    -    | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| mT5-small+RIR  | 2021  |  38.3   |  29.3   |  31.5   |  36.3   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|   mT5-base+RIR   | 2021  |   33.8   |   33.2   |   32.1   |   29.6   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |


### Random
Random represents a random split of this dataset.

| Model / System | Year  | Lang_En | Lang_He | Lang_Kn | Lang_Zh |                    Reported by                    |
|:--------------:|:-----:|:-------:|:-------:|:-------:|:-------:|:-------------------------------------------------:|
| LSTM+Attention | 2021  |  96.6   |  80.8   |  88.7   |  86.8   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| E.Transformer  | 2021  |   99    |  90.4   |  93.7   |  92.2   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|     mBERT      | 2021  |  98.7   |   91    |  95.1   |  93.3   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|  T5-base+RIR   | 2021  |  98.5   |    -    |    -    |    -    | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
| mT5-small+RIR  | 2021  |  98.6   |   90    |  93.8   |  91.8   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |
|   mT5-base+RIR   | 2021  |   99.1   |   90.6   |   94.2   |   92.2   | [Cui et. al.](https://arxiv.org/pdf/2108.03509.pdf) |



## References 
<a name="myfootnote1">[1]</a> Ruixiang Cui, Rahul Aralikatte, Heather Lent and Daniel Hershcovich.2021. [Multilingual Compositional Wikidata Questions.](https://arxiv.org/pdf/2108.03509.pdf) arXiv preprint arXiv:2108.03509.

[Go back to the README](../README.md)
