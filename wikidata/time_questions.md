# TimeQuestions 

**TimeQuestions**<sup>[[1]](#myfootnote1)</sup> is an updated version of the TempQuestions dataset, which contains 16, 181 questions compiled from several existing KGQA 
datasets (LC-QuAD 1.0<sup>[[2]](#myfootnote2)</sup>, LC-QuAD 2.0<sup>[[3]](#myfootnote3)</sup>, ComplexQuestions<sup>[[4]](#myfootnote4)</sup>, etc.) across different KGs (DBpedia and Freebase). All the questions are mapped to Wikidata
using Wikipedia links in these KGs. Questions in each benchmark are tagged for temporal expressions using SUTime and HeidelTime, and for signal words using a dictionary.

This dataset can be downloaded via the [link](https://exaqt.mpi-inf.mpg.de/).

## Leaderboard: Overall

| Model / System | Year | Precision@1 |  MRR   | Hits@5  |  Hits@1 |                 Reported by                            |
|:--------------:|:----:|:-----------:|:------:|:-------:|:-------:|:------------------------------------------------------:|
|     TwiRGCN    | 2022 |    -        | -      |  -  | 0.605 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2022 |    -        | -      |  - | 0.572 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     CronKGQA   | 2022 |    -        | -      |  - | 0.462 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     Graft-Net  | 2022 |    -        | -      |  - | 0.452 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    TempoQR     | 2022 |    -        | -      |  - | 0.416 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    UNIQORN     | 2022 |    -        | -      |  - | 0.331 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    PullNet     | 2022 |    -        | -      |  - | 0.105 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    BERT        | 2022 |    -        | -      |  - | 0.018 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2021 |    0.565    | 0.599  |  0.664  | - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|   Graft-Net    | 2021 |    0.452    | 0.485  |  0.554  | - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    UNIQORN     | 2021 |    0.331    | 0.409  |  0.538  | - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    PullNet     | 2021 |    0.105    | 0.136  |  0.186  | - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |


## Leaderboard: Explicit

| Model / System | Year | Precision@1 |  MRR   | Hits@5  |  Hits@1 |                 Reported by                            |
|:--------------:|:----:|:-----------:|:------:|:-------:|:-------:|:------------------------------------------------------:|
|     TwiRGCN (average)   | 2022 |    -        | -      |  -  | 0.602 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2022 |    -        | -      |  - | 0.568 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     CronKGQA   | 2022 |    -        | -      |  - | 0.466 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    TempoQR     | 2022 |    -        | -      |  - | 0.465 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     Graft-Net  | 2022 |    -        | -      |  - | 0.445 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    UNIQORN     | 2022 |    -        | -      |  - | 0.318 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    PullNet     | 2022 |    -        | -      |  - | 0.022 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    BERT        | 2022 |    -        | -      |  - | 0.006 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2021 |    0.568    | 0.594 | 0.636  | -  | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|   Graft-Net    | 2021 |    0.445    | 0.478 | 0.531  |  -  |[Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    UNIQORN     | 2021 |    0.318    | 0.406 | 0.536  | -  | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    PullNet     | 2021 |    0.105    | 0.136 | 0.186  |  -  |[Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |


## Leaderboard: Implicit

| Model / System | Year | Precision@1 |  MRR   | Hits@5  |  Hits@1 |                 Reported by                            |
|:--------------:|:----:|:-----------:|:------:|:-------:|:-------:|:------------------------------------------------------:|
|     TwiRGCN (interval)   | 2022 |    -        | -      |  -  | 0.603 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2022 |    -        | -      |  - | 0.512 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     CronKGQA   | 2022 |    -        | -      |  - | 0.445 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    Graft-Net    | 2022 |    -        | -      |  - | 0.428 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    TempoQR  | 2022 |    -        | -      |  - | 0.36 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    UNIQORN     | 2022 |    -        | -      |  - | 0.316 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    PullNet     | 2022 |    -        | -      |  - | 0.081 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    BERT        | 2022 |    -        | -      |  - | 0.007 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2021 |    0.508    | 0.567 | 0.633  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|   Graft-Net    | 2021 |    0.428    | 0.465 | 0.525  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    UNIQORN     | 2021 |    0.316    | 0.415 | 0.545  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    PullNet     | 2021 |    0.081    | 0.123 | 0.192  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |


## Leaderboard: Temporal Answer

| Model / System | Year | Precision@1 |  MRR   | Hits@5  |  Hits@1 |                 Reported by                            |
|:--------------:|:----:|:-----------:|:------:|:-------:|:-------:|:------------------------------------------------------:|
|     TwiRGCN (interval)   | 2022 |    -        | -      |  -  | 0.646 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2022 |    -        | -      |  - | 0.642 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     Graft-Net   | 2022 |    -        | -      |  - | 0.515 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    CronKGQA     | 2022 |    -        | -      |  - | 0.511 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    TempoQR   | 2022 |    -        | -      |  - | 0.4 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    UNIQORN     | 2022 |    -        | -      |  - | 0.392 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    PullNet     | 2022 |    -        | -      |  - | 0.234 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    BERT        | 2022 |    -        | -      |  - | 0.028 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2021 |    0.623    | 0.672  | 0.756  |  - |[Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|   Graft-Net    | 2021 |    0.515    | 0.568  | 0.660  |  - |[Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    UNIQORN     | 2021 |    0.392    | 0.472  | 0.597  |  - |[Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    PullNet     | 2021 |    0.234    | 0.277  | 0.349  |  - |[Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |


## Leaderboard: Ordinal

| Model / System | Year | Precision@1 |  MRR   | Hits@5  |  Hits@1 |                 Reported by                            |
|:--------------:|:----:|:-----------:|:------:|:-------:|:-------:|:------------------------------------------------------:|
|     TwiRGCN (average)   | 2022 |    -        | -      |  -  | 0.518 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2022 |    -        | -      |  - | 0.42 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    CronKGQA   | 2022 |    -        | -      |  - | 0.369 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    TempoQR     | 2022 |    -        | -      |  - |0.349 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    Graft-Net   | 2022 |    -        | -      |  - | 0.322 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    UNIQORN     | 2022 |    -        | -      |  - | 0.202 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    PullNet     | 2022 |    -        | -      |  - | 0.029 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|    BERT        | 2022 |    -        | -      |  - | 0.03 | [Sharma et. al.](https://arxiv.org/pdf/2210.06281.pdf) |
|     EXAQT      | 2021 |    0.420    | 0.432 | 0.508  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|   Graft-Net    | 2021 |    0.322    | 0.313 | 0.371  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    UNIQORN     | 2021 |    0.202    | 0.236 | 0.356  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |
|    PullNet     | 2021 |    0.029    | 0.049 | 0.083  |  - | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) |



## References
<a name="myfootnote1">[1]</a> Jia, Zhen, Soumajit Pramanik, Rishiraj Saha Roy, and Gerhard Weikum. [Complex Temporal Question Answering on Knowledge Graphs.](https://dl.acm.org/doi/abs/10.1145/3459637.3482416) In Proceedings of the 30th ACM International Conference on Information & Knowledge Management, pp. 792-802. 2021.

<a name="myfootnote2">[2]</a> Trivedi, Priyansh, Gaurav Maheshwari, Mohnish Dubey, and Jens Lehmann. [Lc-quad: A corpus for complex question answering over knowledge graphs.](http://lc-quad.sda.tech/static/ISWC2017_paper_152.pdf) In International Semantic Web Conference, pp. 210-218. Springer, Cham, 2017.

<a name="myfootnote3">[3]</a> Dubey, Mohnish, Debayan Banerjee, Abdelrahman Abdelkawi, and Jens Lehmann. [Lc-quad 2.0: A large dataset for complex question answering over wikidata and dbpedia.](http://jens-lehmann.org/files/2019/iswc_lcquad2.pdf) In International semantic web conference, pp. 69-78. Springer, Cham, 2019.

<a name="myfootnote4">[4]</a> Bao, Junwei, Nan Duan, Zhao Yan, Ming Zhou, and Tiejun Zhao. [Constraint-based question answering with knowledge graph.](https://aclanthology.org/C16-1236.pdf) In Proceedings of COLING 2016, the 26th International Conference on Computational Linguistics: Technical Papers, pp. 2503-2514. 2016.


[Go back to the README](../README.md)
