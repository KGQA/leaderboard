---
knowledgeGraphs:
    - DBpedia
    - Wikidata
    - Freebase
    - Other
---

# Tracking Progress in Question Answering over Knowledge Graphs

This leaderboard aims to provide a central place to compare the capabilities of different Knowledge Graph Question Answering (KGQA) approaches. It gives a global view of the state-of-the-art (SOTA) across many KGQA benchmarks.

Using a global and open resource, trusting evaluation results will be easier. In particular, we want to close gaps in evaluation campaigns to avoid incomplete or missing comparisons. The ultimate goal is to prevent a replication crisis before it even starts.

### Contributing

#### Adding a new result

There are multiple ways to add a new result to the leaderboard:

1. You can directly edit the leaderboard for your dataset of interest. You can add columns, new rows or even change individual cells. This is the easiest way to add a new result. If a leaderboard for a dataset is not yet available, you can simply add it by pasting a markdown table, similar to the other ones in the repository. Look at [this example]() for a template.
1. You can also simply open an issue and we will add the result for you.

If you have an entire new dataset, which you want to add to the leaderboard, you'll have to create a pull request. This is how we expect you to add a new dataset. (P.S.: You can also simply create an issue and we will add the dataset for you.)

-   Fork the repository
-   Find the appropriate knowledge graph folder, e.g. "freebase"
-   Create these markdown files:
    -   ^(datasetName).md - This is the header of your dataset in plain markdown.
    -   (datasetName).md - This is the main leaderboard table. You can copy the template from [here]()
    -   $(datasetName).md - This is the footer of your dataste, again in plain markdown.
-   Add correspnding route in the file frontend/static/entries.txt
-   Create a pull request

### Video Tutorial

In addition, you can also check out this video tutorial:

<iframe width="1440" height="614" src="https://www.youtube.com/embed/prddZwwe6cc" title="KGQA Leaderboard Contribution Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Citation

`Perevalov, A., Yan, X., Kovriguina, L., Jiang, L., Both, A., & Usbeck, R. (2022). Knowledge Graph Question Answering Leaderboard: A Community Resource to Prevent a Replication Crisis. arXiv preprint arXiv:2201.08174.`
