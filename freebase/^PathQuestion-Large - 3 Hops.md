# PathQuestion 

**PathQuestion**<sup>[[1]](#myfootnote1)</sup> includes two subsets, *PQ* and *PQL*, constructed by adopting two subsets of Freebase as Knowledge Bases. In this dataset, paths are extracted between two entities 
which span two hops (denoted by -2H) or three hops (denoted by -3H) and then generated natural language questions with templates. To make the generated questions analogical to real-world questions, paraphrasing templates and synonyms for relations are included by searching 
the Internet and two real-world datasets, WebQuestions<sup>[[2]](#myfootnote2)</sup> and WikiAnswers<sup>[[3]](#myfootnote3)</sup>. In this way, the syntactic structure and surface wording of the generated questions have been greatly enriched.

Please see the original [paper](https://arxiv.org/abs/1801.04726) for more details about the dataset.


## References 
<a name="myfootnote1">[1]</a> Zhou, Mantong, Minlie Huang, and Xiaoyan Zhu. [An interpretable reasoning network for multi-relation question answering.](https://arxiv.org/abs/1801.04726) arXiv preprint arXiv:1801.04726 (2018).

<a name="myfootnote2">[2]</a> Berant, Jonathan, Andrew Chou, Roy Frostig, and Percy Liang. [Semantic parsing on freebase from question-answer pairs.](https://aclanthology.org/D13-1160/) In Proceedings of the 2013 conference on empirical methods in natural language processing, pp. 1533-1544. 2013.

<a name="myfootnote3">[3]</a> Fader, Anthony, Luke Zettlemoyer, and Oren Etzioni. [Paraphrase-driven learning for open question answering.](https://aclanthology.org/P13-1158/) In Proceedings of the 51st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1608-1618. 2013.
