# ComplexWebQuestions 

**ComplexWebQuestions**<sup>[[1]](#myfootnote1)</sup> is a famous extension of the WebQuestions dataset, introduced to solve the second issue of few complex multi-relational questions in the WebQuestions. 
It is created by adding more constraints and multi-hop relations into the SPARQL queries from WebQuestionsSP, and then automatically generating questions via templates and Amazon Mechanic Turk.

This dataset can be downloaded via the [link](https://www.dropbox.com/sh/7pkwkrfnwqhsnpo/AACuu4v3YNkhirzBOeeaHYala). 

## Leaderboard 
|   Model / System   | Year |  F1  | Hits@1 |  Language  |                              Reported by                              |
|:------------------:|:----:|:----:|:------:|:----------:|:---------------------------------------------------------------------:|
|  ProgramTransfer   | 2022 | 58.7 |  58.1  |     EN     |     [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)      |
| ProgramTransfer-o  | 2022 | 55.8 |  54.7  |     EN     |     [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)      |
| ProgramTransfer-pa | 2022 | 54.5 |  54.3  |     EN     |     [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)      |
| KBIGER             | 2022 | 50.2 |  45.5  |     EN     |     [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)      |
|     QNRKGQA+h      | 2022 |   -   |  51.5  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|      QNRKGQA       | 2022 |   -   |  50.5  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
| ProgramTransfer-f  | 2022 | 45.9 |  45.2  |     EN     |     [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)      |
|     TeacherNet     | 2022 | 44.0 |  48.8  |     EN     |     [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)      |
|        NSM         | 2022 | 44.0 |  48.8  |    EN    |    [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)     |
|       NSM+h        | 2022 |   -   |  48.8  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|       TransferNet  | 2022 |   -   |  48.6  |    EN    |     [Du et al.](https://arxiv.org/pdf/2209.03005.pdf)      |
|       NSM+p        | 2022 |   -   |  48.3  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|        NSM         | 2022 |   -   |  47.6  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|      PullNet       | 2022 |   -   |  45.9  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|        QGG         | 2020 | 40.4 |  44.1  |     EN     | [Lan and Jiang et al.](https://aclanthology.org/2020.acl-main.91.pdf) |
|    Topic Units     | 2019 | 36.5 |   -    |     EN     |     [Lan et al.](https://www.ijcai.org/proceedings/2019/0701.pdf)     |
|      TextRay       | 2019 | 33.9 |  40.8  |     EN     |   [Bhutani et al.](https://dl.acm.org/doi/10.1145/3357384.3358033)    |
|      GraphNet      | 2022 |   -   |  32.8  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|       KV-Mem       | 2022 |   -   |  21.1  |    EN    |    [Ma et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_11)     |
|        UHop        | 2019 | 29.8 |   -    |     EN     |      [Chen et al.](https://arxiv.org/pdf/1904.01246.pdf)       |
| ProgramTransfer-p  | 2022 | 2.3  |  2.1   |     EN     |     [Cao et al.](https://aclanthology.org/2022.acl-long.559.pdf)      |

## References
<a name="myfootnote1">[1]</a> Talmor, Alon, and Jonathan Berant. [The web as a knowledge-base for answering complex questions.](https://arxiv.org/abs/1803.06643) arXiv preprint arXiv:1803.06643 (2018).

[Go back to the README](../README.md)
