# Large-scale Complex Question Answering

LC-QuAD v1.0 and v2.0 are large-scale QA datasets towards complex questions against knowledge graphs. 

### Table of contents

- [LC-QuAD 1.0](#lc-quad-v1)
- [LC-QuAD 2.0](#lc-quad-v2)
  
  
## LC-QuAD v1

The [Largescale Complex Question Answering Dataset 1.0 (LC-QuAD 1.0)](http://lc-quad.sda.tech/static/ISWC2017_paper_152.pdf) is a Question Answering dataset with 5000 pairs of question and its corresponding SPARQL query. The target knowledge base is DBpedia, specifically, the April, 2016 version. 
Please see our [paper for details about the dataset creation process and framework.

### Leaderboard

| Model / System  | Year  | Precision | Recall  |  F1  | Lang |                      Reported by                       | 
|:---------------:|:-----:|:---------:|:-------:|:----:|:----:|:------------------------------------------------------:|
|     STaG-QA     | 2021  |   76.5    |  52.8   | 51.4 |  EN  | [Ravishankar et al.](https://arxiv.org/abs/2111.05825) | 
|   STaG-QA_pre   | 2021  |   74.5    |  54.8   | 53.6 |  EN  | [Ravishankar et al.](https://arxiv.org/abs/2111.05825) |  


## LC-QuAD v2

The [Largescale Complex Question Answering Dataset 2.0 (LC-QuAD 2.0)](http://jens-lehmann.org/files/2019/iswc_lcquad2.pdf) is a Large Question Answering dataset with 30,000 pairs of question 
and its corresponding SPARQL query. The target knowledge base is [Wikidata](https://wikidata.org/wiki/Wikidata:Main_Page/) and [DBpedia](https://dbpedia.org/), specifically the 2018 version. 
Please see our [paper](https://figshare.com/projects/LCQuAD_2_0/62270) for details about the dataset creation process and framework.

### Leaderboard

| Model / System | Year  | Precision | Recall |  F1   | Lang |                      Reported by                       | 
|:--------------:|:-----:|:---------:|:------:|:-----:|:----:|:------------------------------------------------------:|
|      NSQA      | 2021  |   38.19   | 40.39  | 38.29 |  EN  | [Kapanipathi et al.](https://aclanthology.org/2021.findings-acl.339.pdf) | 
|      QAmp      | 2021  |     25     |   50    |   33   |  EN  | [Kapanipathi et al.](https://aclanthology.org/2021.findings-acl.339.pdf) |  


[Go back to the README](../README.md)