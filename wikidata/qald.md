# Question Answering over Linked Data (QALD)

**QALD** is a series of evaluation campaigns on question answering over linked data, which aims at providing an up-to-date benchmark for assessing and comparing 
state-of-the-art systems that mediate between a user, expressing his or her information need in natural language, and RDF data. Thus, it targets all researchers 
and practitioners working on querying Linked Data, natural language processing for question answering, multilingual information retrieval and related topics. The
main goal is to gain insights into the strengths and shortcomings of different approaches and into possible solutions for coping with the large, heterogeneous and
distributed nature of Semantic Web data.

**QALD** challenge began in 2011 and is developing benchmarks that are increasingly being used as standard evaluation venue for question answering over Linked Data.
Overviews of past instantiations of the challenge are available from the CLEF Working Notes, CEUR workshop notes as well as ESWC proceedings.

The key challenge for QA over Linked Data is to translate a user's natural language query into such a form that it can be evaluated using standard Semantic Web query 
processing and inferencing techniques. The main task of QALD therefore is the following:

> Given one or several RDF dataset(s) as well as additional knowledge sources and natural language questions or keywords, return the correct answers or a SPARQL query 
> that retrieves these answers.

### Table of contents
- [QALD-10](#qald-10)
- [QALD-9-plus](#qald-9-plus)


## QALD-10

Please see the original [paper](https://ceur-ws.org/Vol-3196/) for details about the dataset creation process, data format, task and participating systems.

### Leaderboard

|       Model / System       |     Year     |   Precision   |    Recall     |      F1       |                            Language                             |                              Reported by                               |
|:--------------------------:|:------------:|:-------------:|:-------------:|:-------------:|:---------------------------------------------------------------:|:----------------------------------------------------------------------:|
| Borroto et al. (SPARQL-QA) |     2022     | 45.38 (Macro) | 45.74 (Macro) | 59.47 (Macro) |                               EN                                | [GERBIL](https://gerbil-qa.aksw.org/gerbil/experiment?id=202205200035) | 
|          QAnswer           |     2022     | 50.68 (Macro) | 52.38 (Macro) | 57.76 (Macro) |                               EN                                | [GERBIL](https://gerbil-qa.aksw.org/gerbil/experiment?id=202205120000) |
|      Steinmetz et al.      |     2022     | 32.06 (Macro) | 33.12 (Macro) | 49.09 (Macro) |                               EN                                | [GERBIL](https://gerbil-qa.aksw.org/gerbil/experiment?id=202205260012) |
|      Baramiia et al.       |     2022     | 42.89 (Macro) | 42.72 (Macro) | 42.81 (Macro) |                               EN                                | [GERBIL](https://gerbil-qa.aksw.org/gerbil/experiment?id=202205210032) |
|      Gavrilev et al.       |     2022     | 14.21 (Macro) | 14.00 (Macro) | 19.48 (Macro) |                               EN                                | [GERBIL](https://gerbil-qa.aksw.org/gerbil/experiment?id=202205210032) |



## QALD-9-PLUS

 Please see the original [paper](https://ieeexplore.ieee.org/document/9736271) for details about the dataset creation process, data format, task and participating systems. 

 ### Leaderboard

|          Model / System           | Year |Precision| Recall |  F1   | Language |                                  Reported by                                   |
|:---------------------------------:|:----:|:-------:|:------:|:-----:|:--------:|:------------------------------------------------------------------------------:|
|              QAnswer              | 2022 |  50.46  | 44.84  | 44.59 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-en-de-Yandex        | 2022 |  34.91  | 35.18  | 32.83 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-en-de-Helsinki NLP     | 2022 |  34.90  | 35.00  | 33.74 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-en-ru-Yandex        | 2022 |  22.84  | 21.61  | 21.07 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-en-ru-Helsinki NLP     | 2022 |  22.38  | 20.63  | 20.41 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-en-fr-Yandex        | 2022 |  32.16  | 29.49  | 28.86 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-en-fr-Helsinki NLP     | 2022 |  30.76  | 28.19  | 27.57 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|              QAnswer              | 2022 |  33.05  | 32.44  | 31.71 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-de-en-Yandex        | 2022 |  41.36  | 38.71  | 36.49 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-de-en-Helsinki NLP     | 2022 |  40.95  | 38.11  | 36.57 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-de-ru-Yandex        | 2022 |  22.33  | 21.61  | 21.07 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-de-fr-Yandex        | 2022 |  31.05  | 28.23  | 27.71 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     | 
|    QAnswer-de-fr-Helsinki NLP     | 2022 |  28.32  | 26.21  | 25.21 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|              QAnswer              | 2022 |  22.29  | 22.23  | 21.43 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ru-en-Yandex        | 2022 |  44.09  | 39.79  | 38.98 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-ru-en-Helsinki NLP     | 2022 |  39.12  | 36.02  | 34.63 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ru-de-Yandex        | 2022 |  29.20  | 29.88  | 27.17 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ru-fr-Yandex        | 2022 |  29.82  | 27.34  | 26.62 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-ru-fr-Helsinki NLP     | 2022 |  21.60  | 20.44  | 19.72 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|              QAnswer              | 2022 |  25.32  | 25.35  | 23.00 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-fr-en-Yandex        | 2022 |  42.11  | 35.04  | 36.57 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-fr-en-Helsinki NLP     | 2022 |  42.11  | 35.04  | 36.57 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-fr-de-Yandex        | 2022 |  33.01  | 35.82  | 31.01 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-fr-de-Helsinki NLP     | 2022 |  27.74  | 30.56  | 25.74 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-fr-ru-Yandex        | 2022 |  11.58  | 15.74  | 12.28 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-fr-ru-Helsinki NLP     | 2022 |    0    |   0    |   0   |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-lt-en-Yandex        | 2022 |  41.96  | 39.19  | 39.30 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-lt-de-Yandex        | 2022 |  38.94  | 36.60  | 37.34 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-lt-de-Helsinki NLP     | 2022 |  45.73  | 39.35  | 39.49 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-lt-ru-Yandex        | 2022 |  17.32  | 17.39  | 17.35 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-lt-ru-Helsinki NLP     | 2022 |  14.13  | 15.22  | 14.49 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-lt-fr-Yandex        | 2022 |  33.26  | 28.32  | 29.16 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-lt-fr-Helsinki NLP     | 2022 |  30.36  | 26.28  | 26.42 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-uk-en-Yandex        | 2022 |  43.15  | 43.15  | 39.17 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-uk-en-Helsinki NLP     | 2022 |  32.67  | 33.01  | 30.38 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-uk-de-Yandex        | 2022 |  31.86  | 30.32  | 28.82 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-uk-de-Helsinki NLP     | 2022 |  29.48  | 27.32  | 27.13 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-uk-ru-Yandex        | 2022 |  22.65  | 22.53  | 22.02 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-uk-ru-Helsinki NLP     | 2022 |  24.64  | 23.97  | 23.19 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-uk-fr-Yandex        | 2022 |  30.85  | 28.07  | 27.27 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    QAnswer-uk-fr-Helsinki NLP     | 2022 |  22.68  | 23.52  | 20.76 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-be-en-Yandex        | 2022 |  54.55  | 45.54  | 45.62 |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-be-de-Yandex        | 2022 |  36.54  | 27.47  | 27.46 |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-be-ru-Yandex        | 2022 |  18.18  | 18.18  | 18.18 |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-be-fr-Yandex        | 2022 |  40.91  | 22.81  | 24.41 |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-hy-en-Yandex        | 2022 |  26.32  | 21.88  | 22.53 |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-hy-de-Yandex        | 2022 |  27.74  | 34.95  | 29.50 |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-hy-ru-Yandex        | 2022 |  5.26   |  5.26  | 5.26  |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-hy-fr-Yandex        | 2022 |  16.84  |  16.6  | 13.78 |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ba-en-Yandex        | 2022 |  31.42  | 28.45  | 28.44 |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ba-de-Yandex        | 2022 |  23.66  | 23.19  | 22.87 |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ba-ru-Yandex        | 2022 |  20.73  | 20.16  | 19.17 |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ba-fr-Yandex        | 2022 |  18.63  | 17.23  | 16.08 |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|            DeepPavlov             | 2022 |  17.65  | 11.30  | 12.40 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-en-ru-Yandex      | 2022 |  7.35   |  6.99  | 7.11  |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-en-ru-Helsinki NLP   | 2022 |  8.82   |  7.35  | 7.84  |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-de-en-Yandex      | 2022 |  19.85  | 12.59  | 13.92 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-de-en-Helsinki NLP   | 2022 |  16.18  |  9.83  | 10.93 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-de-ru-Yandex      | 2022 |  8.82   |  7.37  | 7.63  |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|            DeepPavlov             | 2022 |  9.56   |  8.33  | 8.70  |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-ru-en-Yandex      | 2022 |  16.91  | 10.54  | 11.61 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-ru-en-Helsinki NLP   | 2022 |  13.24  |  7.93  | 8.79  |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-fr-en-Yandex      | 2022 |  31.58  | 22.02  | 22.73 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-fr-en-Helsinki NLP   | 2022 |  21.05  | 16.67  | 17.29 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-fr-ru-Yandex      | 2022 |  10.53  | 10.53  | 10.53 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-fr-ru-Helsinki NLP   | 2022 |  10.53  | 10.53  | 10.53 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-lt-en-Yandex      | 2022 |  17.39  | 10.94  | 11.73 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-lt-ru-Yandex      | 2022 |  4.35   |  4.35  | 4.35  |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-lt-ru-Helsinki NLP   | 2022 |  4.35   |  4.35  | 4.35  |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-uk-en-Yandex      | 2022 |  16.91  | 10.18  | 11.37 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-uk-en-Helsinki NLP   | 2022 |  16.91  | 10.24  | 11.18 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-uk-ru-Yandex      | 2022 |  7.35   |  6.99  | 7.11  |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|   DeepPavlov-uk-ru-Helsinki NLP   | 2022 |  6.62   |  6.25  | 6.37  |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-be-en-Yandex      | 2022 |  9.09   |  4.55  | 6.06  |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-be-ru-Yandex      | 2022 |  9.09   |  9.09  | 9.09  |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-hy-en-Yandex      | 2022 |  21.05  | 11.49  | 12.21 |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-hy-ru-Yandex      | 2022 |  10.53  | 10.53  | 10.53 |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-ba-en-Yandex      | 2022 |  15.62  |  9.07  | 9.86  |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|      DeepPavlov-ba-ru-Yandex      | 2022 |  9.38   |  7.55  | 8.06  |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|             Platypus              | 2022 |  15.89  | 15.26  | 15.03 |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-en-fr-Yandex       | 2022 |  8.94   | 10.10  | 8.92  |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-en-fr-Helsinki NLP    | 2022 |  8.21   |  9.36  | 8.19  |    EN    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-de-en-Yandex       | 2022 |  12.27  | 11.60  | 11.44 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-de-en-Helsinki NLP    | 2022 |  15.21  | 14.34  | 14.26 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-de-fr-Yandex       | 2022 |  12.27  | 11.60  | 11.44 |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-de-fr-Helsinki NLP    | 2022 |  5.91   |  6.62  | 5.93  |    DE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-ru-en-Yandex       | 2022 |  16.13  | 15.27  | 15.11 |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-ru-en-Helsinki NLP    | 2022 |  13.24  |  7.93  | 8.79  |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-ru-fr-Yandex       | 2022 |  7.84   |  9.19  | 7.81  |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-ru-fr-Helsinki NLP    | 2022 |  6.64   |  7.35  | 6.67  |    RU    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|             Platypus              | 2022 |  4.17   |  4.17  | 4.17  |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-fr-en-Yandex       | 2022 |  21.05  | 21.05  | 21.05 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-fr-en-Helsinki NLP    | 2022 |  21.05  | 21.05  | 21.05 |    FR    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-lt-en-Yandex       | 2022 |  17.39  | 15.22  | 15.94 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-lt-fr-Yandex       | 2022 |  13.59  | 15.22  | 12.56 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-lt-fr-Helsinki NLP    | 2022 |  13.04  | 13.04  | 13.04 |    LT    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-uk-en-Yandex       | 2022 |  14.97  | 14.35  | 14.17 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-uk-en-Helsinki NLP    | 2022 |  14.22  | 13.44  | 13.48 |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       Platypus-uk-fr-Yandex       | 2022 |  9.68   | 10.66  | 9.53  |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|    Platypus-uk-fr-Helsinki NLP    | 2022 |  7.75   |  8.46  | 7.65  |    UK    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-be-en-Yandex        | 2022 |  9.09   |  9.09  | 9.09  |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-be-fr-Yandex        | 2022 |  9.09   |  9.09  | 9.09  |    BE    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-hy-en-Yandex        | 2022 |  15.79  | 15.79  | 15.79 |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-hy-fr-Yandex        | 2022 |  5.26   |  5.26  | 5.26  |    HY    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ba-en-Yandex        | 2022 |  8.77   |  8.36  | 7.95  |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |
|       QAnswer-ba-fr-Yandex        | 2022 |  5.24   |  6.25  | 5.28  |    BA    |    [Perevalov et. al.](https://dl.acm.org/doi/pdf/10.1145/3485447.3511940)     |