# Tracking Progress in Question Answering over Knowledge Graphs

## Table of contents

### DBpedia

- [LC-QuAD 1.0](dbpedia/lcquad.html#lc-quad-v1)
- [LC-QuAD 2.0](dbpedia/lcquad.html#lc-quad-v2)
- [QALD-9](dbpedia/qald.html#qald-9)
- [QALD-8](dbpedia/qald.html#qald-8)
- [QALD-7](dbpedia/qald.html#qald-7)
- [QALD-6](dbpedia/qald.html#qald-6)
- [QALD-5](dbpedia/qald.html#qald-5)
- [QALD-4](dbpedia/qald.html#qald-4)
- [QALD-3](dbpedia/qald.html#qald-3)
- [QALD-2](dbpedia/qald.html#qald-2)
- [QALD-1](dbpedia/qald.html#qald-1)
- [SimpleDBpediaQA](dbpedia/simple_dbpedia_qa.html)
- [MLPQ](dbpedia/mlpq.html)

### Wikidata

- [KQA Pro](wikidata/kqa_pro.html)
- [RuQA 1.0](wikidata/rubq.html#rubq-1)
- [RuQA 2.0](wikidata/rubq.html#rubq-2)
- [Compositional Wikidata Questions](wikidata/compositional_wikidata_questions.html)
- [TimeQuestions](wikidata/time_questions.html)
- [CronQuestions](wikidata/cron_questions.html) 
- [CLC-QuAD](wikidata/clcquad.html)
- [SimpleQuestionsWikidata](wikidata/simple_questions_wikidata.html)

### Freebase

- [Free917](freebase/free917.html)
- [WebQuestions](freebase/web_questions.html)
- [ComplexQuestions](freebase/complex_questions.html)
- [GraphQuestions](freebase/graph_questions.html)
- [WebQuestionSP](freebase/web_questions_sp.html)
- [ComplexWebQuestions](freebase/complex_web_questions.html)
- [30M Factoid QA](freebase/the_30m_factoid_qa.html)
- [PathQuestion](freebase/path_question.html)
- [Compositional Freebase Questions](freebase/compositional_freebase_questions.html)
- [GrailQA](freebase/grailqa/grailqa.html)
- [TempQuestions](freebase/temp_questions.html)

### Other KGs

- [MetaQA](other/meta_qa.html)
- [EventKQ](other/event_kg.html)

This document aims to provide a central place where the capabilities of different KGQA approaches can be compared, and give a global view of the state-of-the-art (SOTA) across these QA benchmarks.
Thus, the trust of evaluation results could be further enhanced, especially in the case that they are incomplete or missing while comparing to certain systems. 

### Contributing

#### Adding a new result

If you would like to add a new result, you can just click on the small edit button in the top-right
corner of the file for the respective task (see below).

![Click on the edit button to add a file](img/edit_file.png)

This allows you to edit the file in Markdown. Simply add a row to the corresponding table in the
same format. Make sure that the table stays sorted (with the best result on top). 
After you've made your change, make sure that the table still looks ok by clicking on the
"Preview changes" tab at the top of the page. If everything looks good, go to the bottom of the page,
where you see the below form. 

![Fill out the file change information](img/propose_file_change.png)

Add a name for your proposed change, an optional description, indicate that you would like to
"Create a new branch for this commit and start a pull request", and click on "Propose file change".

#### Adding a new dataset or task

For adding a new dataset or task, you can also follow the steps above. Alternatively, you can fork the repository.
In both cases, follow the steps below:

1. If your task is completely new, create a new file and link to it in the table of contents above.
2. If not, add your task or dataset to the respective section of the corresponding file (in alphabetical order).
3. Briefly describe the dataset/task and include relevant references. 
4. Describe the evaluation setting and evaluation metric.
5. Show how an annotated example of the dataset/task looks like.
6. Add a download link if available.
7. Copy the below table and fill in at least two results (including the state-of-the-art)
  for your dataset/task (change Score to the metric of your dataset). If your dataset/task
  has multiple metrics, add them to the right of `Score`.
1. Submit your change as a pull request.
  
| Model / System | Year | Metric1 | Metric2 | Reported by |
|:--------------:|:----:|:-------:|:-------:|:-----------:|
|                |      |         |         |             |


### Instructions for building the site locally

Instructions for building the website locally using Jekyll can be found [here](jekyll_instructions.md).


