# GraphQuestions 

**GraphQuestions**<sup>[[1]](#myfootnote1)</sup> is such a QA dataset specified many characteristics of a question, including structural complexity, answer cardinality, function, commonness, and even paraphrasing. 
It contains over 5000 pairs of question-logical forms, where each question is associated with ground-truth answer from the knowledge base. In the process of constructing this dataset, 
a semi-automated framework was proposed, where an intermediate graph query representation, automatically generated from a knowledge base, was used to guide to formalize the characteristics 
of a question. Human annotators converted these graph queries to natural language questions, and then produced many more questions with the same meaning using two levels of paraphrases, i.e. entity and question.

## References
<a name="myfootnote1">[1]</a> Su, Yu, Huan Sun, Brian Sadler, Mudhakar Srivatsa, Izzeddin Gür, Zenghui Yan, and Xifeng Yan. [On generating characteristic-rich question sets for qa evaluation.](http://cs.ucsb.edu/~ysu/papers/emnlp16_graphquestions.pdf) In Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing, pp. 562-572. 2016.