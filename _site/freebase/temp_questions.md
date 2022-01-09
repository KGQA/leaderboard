# TempQuestions 

**TempQuestions**<sup>[[1]](#myfootnote1)</sup> is a new benchmark containing 1,271 questions, that are all temporal in nature, paired with their answers. Most questions require decomposing 
them into sub-questions, and the questions are of a kind that they would be best evaluated on a combination of structured data and unstructured text sources. This collection is derived by 
judiciously selecting time-related questions from the Free917, WebQuestions and ComplexQuestions sets, with additional curation and tagging of temporal cues.

This dataset can be downloaded via the [link](http://qa.mpi-inf.mpg.de/TempQuestions.zip).


## Leaderboard: Explicit

| Model / System | Year | Precision | Recall | F-Score |                            Reported by                            |
|:--------------:|:----:|:---------:|:------:|:-------:|:-----------------------------------------------------------------:|
|      AQQU      | 2018 |   27.6    |  60.7  |  31.1   | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |
|     QUINT      |2018  |   29.3    |  60.9  |  32.6   | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |


## Leaderboard: Implicit

| Model / System | Year | Precision | Recall | F-Score |                            Reported by                            |
|:--------------:|:----:|:---------:|:------:|:-------:|:-----------------------------------------------------------------:|
|      AQQU      | 2018 |   12.9    |  34.9  |  14.5   | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |
|     QUINT      |2018  |    25.6    |  54.4   |   27.0   | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |


## Leaderboard: Temporal Answer

| Model / System | Year | Precision | Recall | F-Score |                            Reported by                            |
|:--------------:|:----:|:---------:|:------:|:-------:|:-----------------------------------------------------------------:|
|      AQQU      | 2018 |   26.1    |  33.5  |  27.4   | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |
|     QUINT      |2018  |    25.2    |  38.2   |   27.3   | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |


## Leaderboard: Ordinal

| Model / System | Year | Precision@1 | MRR  | Hits@5 |                            Reported by                            |
|:--------------:|:----:|:-----------:|:----:|:------:|:-----------------------------------------------------------------:|
|      AQQU      | 2018 |    28.4     | 57.4 |  32.7  | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |
|     QUINT      |2018  |     21.3     | 54.9 |  26.1   | [Jia et. al.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) |


## References
<a name="myfootnote1">[1]</a> Jia, Zhen, Abdalghani Abujabal, Rishiraj Saha Roy, Jannik Strötgen, and Gerhard Weikum. [Tempquestions: A benchmark for temporal question answering.](https://dl.acm.org/doi/abs/10.1145/3184558.3191536) In Companion Proceedings of the The Web Conference 2018, pp. 1057-1062. 2018.


[Go back to the README](../README.md)