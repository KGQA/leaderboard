# Tracking Progress in Question Answering over Knowledge Graphs

## Table of contents

### Question Answering Systems with Descriptions

The [QA Systems Table](systems.md) contains links to publications, demo/APIs (if available) and short descriptions of ca. 100 QA systems.

### DBpedia 

- [LC-QuAD 1.0](dbpedia/lcquad.md#lc-quad-v1)
- [LC-QuAD 2.0](dbpedia/lcquad.md#lc-quad-v2)
- [rewordQALD-9](dbpedia/rewordQALD9.md)
- [QALD-9-plus](dbpedia/qald.md#qald-9-plus)
- [QALD-9](dbpedia/qald.md#qald-9)
- [QALD-8](dbpedia/qald.md#qald-8)
- [QALD-7](dbpedia/qald.md#qald-7)
- [QALD-6](dbpedia/qald.md#qald-6)
- [QALD-5](dbpedia/qald.md#qald-5)
- [QALD-4](dbpedia/qald.md#qald-4)
- [QALD-3](dbpedia/qald.md#qald-3)
- [QALD-2](dbpedia/qald.md#qald-2)
- [QALD-1](dbpedia/qald.md#qald-1)
- [SimpleDBpediaQA](dbpedia/simple_dbpedia_qa.md)
- [MLPQ](dbpedia/mlpq.md)
- [Monument](dbpedia/monument.md)

### Wikidata

- [KQA Pro](wikidata/kqa_pro.md)
- [RuBQ 1.0](wikidata/rubq.md#rubq-1)
- [RuBQ 2.0](wikidata/rubq.md#rubq-2)
- [Compositional Wikidata Questions](wikidata/compositional_wikidata_questions.md)
- [TimeQuestions](wikidata/time_questions.md)
- [CronQuestions](wikidata/cron_questions.md) 
- [CLC-QuAD](wikidata/clcquad.md)
- [SimpleQuestionsWikidata](wikidata/simple_questions_wikidata.md)
- [MKQA](wikidata/MKQA.md)
- [Mintaka](wikidata/Mintaka.md)
- [Complex QA over Temporal KG](ComplexQA_over_Temporal_KG.md)

### Freebase

- [Free917](freebase/free917.md)
- [WebQuestions](freebase/web_questions.md)
- [ComplexQuestions](freebase/complex_questions.md)
- [GraphQuestions](freebase/graph_questions.md)
- [WebQuestionSP](freebase/web_questions_sp.md)
- [ComplexWebQuestions](freebase/complex_web_questions.md)
- [30M Factoid QA](freebase/the_30m_factoid_qa.md)
- [PathQuestion](freebase/path_question.md)
- [Compositional Freebase Questions](freebase/compositional_freebase_questions.md)
- [GrailQA](freebase/grailqa/grailqa.md)
- [TempQuestions](freebase/temp_questions.md)
- [freebaseQA](freebase/freebaseQA.md)

### Other KGs

- [MetaQA](other/meta_qa.md)
- [EventKQ/EventQA](other/event_kg.md)
- [WC2014QA](other/WC2014QA.md)


This leaderboard aims to provide a central place to compare the capabilities of different Knowledge Graph Question Answering (KGQA) approaches. It gives a global view of the state-of-the-art (SOTA) across many KGQA benchmarks.

Using a global and open resource, trusting evaluation results will be easier. In particular, we want to close gaps in evaluation campaigns to avoid incomplete or missing comparisons. The ultimate goal is to prevent a replication crisis before it even starts.

### Contributing

#### Adding a new result

If you would like to add a new result, you can just click on the small edit button in the top-right corner of the file for the respective dataset. This allows you to edit the file in Markdown. Simply add a row to the corresponding table in the same format. Make sure that the table stays sorted (with the best result on top). After you've made your change, make sure that the table still looks ok by clicking on the "Preview changes" tab at the top of the page. If everything looks good, go to the bottom of the page, where you see the below form. 

Add a name for your proposed change, an optional description, indicate that you would like to "Create a new branch for this commit and start a pull request", and click on "Propose file change".

#### Adding a new dataset or task

For adding a new dataset or task, you can also follow the steps above. Alternatively, you can fork the repository. In both cases, follow the steps below:

1. If your dataset is completely new, create a new file and link to it in the table of contents above.
2. Briefly describe the dataset and include relevant references. 
3. Describe the evaluation setting and evaluation metric.
4. Show how an annotated example of the dataset looks like.
5. Add a download link if available.
6. Copy the below table and fill in at least two results (including the state-of-the-art) for your dataset (change Metric1/Metric2/Metric3 to the metric of your dataset). 
7. Submit your change as a pull request.
  
| Model / System | Year | Metric1 | Metric2 | Metric3 | Reported by |
|:--------------:|:----:|:-------:|:-------:|:-------:|:-----------:|
|                |      |         |         |         |             |


### Instructions for building the site locally

Instructions for building the website locally using Jekyll can be found [here](jekyll_instructions.md).

### Citation

Please cite the following:

```Perevalov, A., Yan, X., Kovriguina, L., Jiang, L., Both, A., & Usbeck, R. (2022). Knowledge Graph Question Answering Leaderboard: A Community Resource to Prevent a Replication Crisis. arXiv preprint arXiv:2201.08174.```
### Acknowledgement 

This site is based on https://nlpprogress.com/ and thus, a great thanks goes to Sebastian Ruder.

## Instruction on adding new dataset and leadeboard.
Please check this video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/MfinKQx2bss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
