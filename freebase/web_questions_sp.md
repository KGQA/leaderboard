# WebQuestionsSP

**WebQuestionsSP**<sup>[[1]](#myfootnote1)</sup> is the annotated version of WebQuestions, which contains questions that require a 1 or 2-hop relation path to arrive at the answer entity. 
More specifically, about 40% of the questions require a 2-hop relation to reach the answer. Freebase is its backgound KB. Originally, it splits into 3,298 questions 
as train set and 1,639 questions as test set. 

This dataset can be downloaded via the [link](https://www.microsoft.com/en-us/download/details.aspx?id=52763).


## Leaderboard 

| Model / System | Year |Precision|Recall| F1  |Language|                                  Reported by                                   |
|:--------------:|:----:|:-------:|:----:|:---:|:------:|:------------------------------------------------------------------------------:|
|     SGM     | 2022 |         |      |72.36|   EN |[Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)|
|     SSKGQA     | 2022 |         |      |71.4（Hits@1）|   EN |[Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)|
|     TransferNet| 2022 |         |      |71.4（Hits@1）|   EN |[Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)|
|     SeqM     | 2020 |         |      |71.83|   EN |[Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)|
|     STAGG     | 2015 |         |      |69|   EN |[Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)|
|     UHop     | 2019 |         |      |68.5|   EN |[Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)|
|     PullNet     | 2022 |         |      |68.1（Hits@1）|   EN |[Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)|
|     Topic Units     | 2019 |         |      |67.9|   EN |[Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)|
|     DCRN     | 2022 |         |      |67.8（Hits@1）|   EN |[Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)|
|     GraftNet     | 2022 |         |      |66.4（Hits@1）|   EN |[Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)|
|     EmbedKGQA     | 2022 |         |      |66.1（Hits@1）|   EN |[Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)|
|     textray     | 2019 |         |      |60.3|   EN |[Ma L et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747229)|
|     KV-MemNN     | 2022 |         |      |46.7（Hits@1）|   EN |[Mingchen Li and Jonathan Shihao Ji](https://arxiv.org/pdf/2204.10194.pdf)|

## References 
<a name="myfootnote1">[1]</a> Yih, Wen-tau, Matthew Richardson, Christopher Meek, Ming-Wei Chang, and Jina Suh. [The value of semantic parse labeling for knowledge base question answering.](http://anthology.aclweb.org/P16-2033) In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pp. 201-206. 2016.


[Go back to the README](../README.md)
