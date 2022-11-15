# Mintaka: A Complex, Natural, and Multilingual Dataset for End-to-End Question Answering
[Minatak](https://aclanthology.org/2022.coling-1.138.pdf) QA dataset contains 20K English question-answer pairs linked to Wikidata, and additional translated 160K questions in eight different languages.
Train, dev, and test set can be found [here](https://github.com/amazon-research/mintaka/tree/main/data).

##  Results of English baseline models on Mintaka
 | Model  | Year | hits@1 | Language | Reported By |
 | ------------- | ------------- | ----------| ------------- | -------------- |
 | T5 | 2022 | 0.28 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | T5 for CBQA (zero-shot) | 2022 | 0.20 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | XL-T5 (fine-tuned) | 2022 | 0.38 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | KVMemNet | 2022 | 0.12 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | EmbedKGQA | 2022 | 0.18 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | Rigel | 2022 | 0.20 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | DPR (zero-shot) |2022 | 0.15 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | DPR (trained) |2022 | 0.31 | English | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | MT5|2022 | 0.16 | Multilingually | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | T5 for CBQA (translated)|2022 | 0.31 | Multilingually | [Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 | Rigel | 2022 | 0.19 | Multilingually |[Sen et al., 2022](https://aclanthology.org/2022.coling-1.138.pdf)|
 
 
 ## Reference
 Sen, P., Aji, A. F., & Saffari, A. (2022). Mintaka: A Complex, Natural, and Multilingual Dataset for End-to-End Question Answering. Proceedings of the 29th International Conference on Computational Linguistics, 1604–1619. https://aclanthology.org/2022.coling-1.138
 
 [Go back to README](../README.md)
