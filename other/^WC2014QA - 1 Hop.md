# WC2014QA

**WC2014QA**<sup>[[1]](#myfootnote1)</sup> is created for question answering tasks over a football world cup 2014 knowlege graph. You could refer to more detailed dataset creation process in the original paper by this [link](https://arxiv.org/pdf/1611.02266.pdf).

The dataset contain two types of questions, namely path query and conjunctive query. A path query is a question that contains only one named entity from the knowledge base and its answer can be found from the knowledge graph by walking down a path consisting of a few relations. A conjunctive query is a question that contains more than one entities and the answer is given as the conjunction of all path queries starting from each entity. 
Furthermore, the path query could be classified by 1-hop and 2-hop questions. 

This dataset can be downloaded via the [link](https://github.com/zmtkeke/IRN).


## References 
<a name="myfootnote1">[1]</a> Zhang et al. “Gaussian Attention Model and Its Application to Knowledge Base Embedding and Question Answering.” ICLR (2017).

