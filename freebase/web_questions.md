# WebQuestions

**WebQuestions** <sup>[[1]](#myfootnote1)</sup> is a significantly large QA dataset constructed to solve real-world questions. Its questions were collected from Google Suggest API and answers were crowdsourced via Amazon Mechanic Turk. 
It consists of 5810 questions-answering pairs.  

## Leaderboard 


|  Model / System   | Year |Precision| Recall |  F1  |Language|                              Reported by                              |
|:-----------------:|:----:|:-------:|:------:|:----:|:------:|:---------------------------------------------------------------------:|
|     Reranking     | 2022 |    -    |   -    | 56.0 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|     Jain [1]      | 2016 |    -    |   -    | 55.6 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|   Xu et al. [2]   | 2019 |    -    |   -    | 54.6 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|   Hu et al. [3]   | 2018 |    -    |   -    | 53.6 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|     Wang et al.      | 2022  |    -    |   -    | 53.2 |   EN   |          [Wang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_15)          |
|  Luo et al. [4]   | 2018 |    -    |   -    | 52.7 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|  Yih et al. [5]   | 2015 |    -    |   -    | 52.5 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|  Bao et al. [6]   | 2016 |    -    |   -    | 52.4 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|      Ranking      | 2022 |    -    |   -    | 52.4 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|    Zhu et al.     | 2022  |    -    |   -    | 52.1 |   EN   |          [Wang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_15)          |
|  Chen et al. [7]  | 2015 |    -    |   -    | 51.8 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |
|  Abujabal et al.  | 2022  |    -    |   -    | 51.0 |   EN   |          [Wang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_15)          |
|   Berant et al.   | 2022  |    -    |   -    | 49.7 |   EN   |          [Wang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_15)          |
|    Yao et al.     | 2022  |    -    |   -    | 44.3 |   EN   |          [Wang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_15)          |
|    Dong et al.    | 2022  |    -    |   -    | 40.8 |   EN   |          [Wang et al.](https://link.springer.com/chapter/10.1007/978-3-031-10983-6_15)          |
| Berant et al. [8] | 2013 |    -    |   -    | 36.4 |   EN   | [Yonghui Jia and Wenliang Chen](https://arxiv.org/pdf/2204.12808.pdf) |

## References 
<a name="myfootnote1">[Dataset]</a> Berant, Jonathan, Andrew Chou, Roy Frostig, and Percy Liang. [Semantic parsing on freebase from question-answer pairs.](https://aclanthology.org/D13-1160/) In Proceedings of the 2013 conference on empirical methods in natural language processing, pp. 1533-1544. 2013.

* [1] J ain, S.: Question answering over knowledge base using factual memory networks. In: Proceedings of NAACL-HLT. pp. 109–115 (2016)]
* [2] Xu, K., Lai, Y., Feng, Y., Wang, Z.: Enhancing key-value memory neural networks for knowledge based question answering. In: Proceedings of NAACL-HLT. pp. 2937–2947 (2019)
* [3] Hu, S., Zou, L., Zhang, X.: A state-transition framework to answer complex questions over knowledge base. In: Proceedings of EMNLP. pp. 2098–2108 (2018)
* [4] Luo,K.,Lin,F.,Luo,X.,Zhu,K.:Knowledgebasequestionansweringviaencoding of complex query graphs. In: Proceedings of EMNLP. pp. 2185–2194 (2018)
* [5] Yih, S.W.t., Chang, M.W., He, X., Gao, J.: Semantic parsing via staged query graph generation: Question answering with knowledge base. In:Proceedings of ACL. pp. 1321–1331 (2015)
* [6] Bao, J., Duan, N., Yan, Z., Zhou, M., Zhao, T.: Constraint-based question answer- ing with knowledge graph. In: Proceedings of COLING. pp. 2503–2514 (2016)
* [7] Chen, Y., Wu, L., Zaki, M.J.: Bidirectional attentive memory networks for question answering over knowledge bases. In: Proceedings of NAACL-HLT. pp. 2913–2923(2019) 
* [8] Chen, Y., Wu, L., Zaki, M.J.: Bidirectional attentive memory networks for question answering over knowledge bases. In: Proceedings of NAACL-HLT. pp. 2913–2923(2019)

[Go back to the README](../README.md)
