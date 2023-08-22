---
name: LC-QuAD v2
datasetUrl: https://figshare.com/projects/LCQuAD_2_0/62270
---

|      Model / System       | Year | Precision | Recall |  F1   | Language |                                     Reported by                                      | Gold Entity |
| :-----------------------: | :--: | :-------: | :----: | :---: | :------: | :----------------------------------------------------------------------------------: | :---------: |
|         T5-Small          | 2022 |     -     |   -    |  92   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                |     ✅      |
|          T5-Base          | 2022 |     -     |   -    |  91   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                |     ✅      |
|       PGN-BERT-BERT       | 2022 |     -     |   -    |  86   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                |     ✅      |
|       SGPT_Q,K [1]        | 2022 |     -     |   -    | 89.04 |    EN    | [Al Hasan Rony et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9815253) |     ✅      |
|         PGN-BERT          | 2022 |     -     |   -    |  77   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                |     ✅      |
|         NSpM [2]          | 2022 |     -     |   -    | 66.47 |    EN    | [Al Hasan Rony et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9815253) |     ✅      |
|           BART            | 2022 |     -     |   -    |  64   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                |     ✅      |
|     Zou et al. + Bert     | 2021 |     -     |   -    | 59.30 |    EN    |                  [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                  |     ✅      |
|            CLC            | 2021 |     -     |   -    |  59   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                |     ✅      |
|       Multi-hop QGG       | 2020 |     -     |   -    |  53   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2204.12793.pdf)                |     ✅      |
| Zou et al. + Tencent Word | 2021 |     -     |   -    | 52.90 |    EN    |                  [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                  |     ✅      |
|       Multi-hop QGG       | 2021 |     -     |   -    | 52.60 |    EN    |                  [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                  |     ✅      |
|          AQG-net          | 2021 |     -     |   -    | 44.90 |    EN    |                  [Zou et al.](https://arxiv.org/pdf/2111.06086.pdf)                  |     ✅      |
|        SGPT_Q [3]         | 2022 |     -     |   -    | 83.45 |    EN    | [Al Hasan Rony et al.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9815253) |     ❌      |
|          ChatGPT          | 2023 |     -     |   -    | 42.76 |    EN    |                  [Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)                  |     ❌      |
|         GPT-3.5v3         | 2023 |     -     |   -    | 39.04 |    EN    |                  [Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)                  |     ❌      |
|         GPT-3.5v2         | 2023 |     -     |   -    | 33.77 |    EN    |                  [Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)                  |     ❌      |
|           GPT-3           | 2023 |     -     |   -    | 33.04 |    EN    |                  [Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)                  |     ❌      |
|          FLAN-T5          | 2023 |     -     |   -    | 30.14 |    EN    |                  [Tan et al.](https://arxiv.org/pdf/2303.07992.pdf)                  |     ❌      |
|          UNIQORN          | 2021 |   33.1    |   -    |   -   |    EN    |                 [Pramanik et al.](https://arxiv.org/abs/2108.08614)                  |     ❌      |
|          QAnswer          | 2020 |   30.80   |   -    |   -   |    EN    |                 [Pramanik et al.](https://arxiv.org/abs/2108.08614)                  |     ❌      |
|         GraftNet          | 2018 |   19.7    |   -    |   -   |    EN    |             [Christmann P. et al](https://arxiv.org/pdf/2108.08597.pdf)              |     ❌      |
|    ElNeuQA-ConvS2S [1]    | 2021 |   26.90   |   27   | 26.90 |    EN    |                [Diomedi, Hogan](https://arxiv.org/pdf/2107.02865.pdf)                |     ❌      |
|   GRAFT-Net + Clocq [2]   | 2022 |   19.70   |   -    |   -   |    EN    |             [Christmann P. et al](https://arxiv.org/pdf/2108.08597.pdf)              |     ❌      |
|         Platypus          | 2018 |    3.6    |   -    |   -   |    EN    |                 [Pramanik et al.](https://arxiv.org/abs/2108.08614)                  |     ❌      |
|          Pullnet          | 2019 |    1.1    |   -    |   -   |    EN    |                 [Pramanik et al.](https://arxiv.org/abs/2108.08614)                  |     ❌      |
|          UNIK-QA          | 2020 |    0.5    |   -    |   -   |    EN    |                 [Pramanik et al.](https://arxiv.org/abs/2108.08614)                  |     ❌      |
|        GETT-QA [4]        | 2023 |   40.3    |   -    |   -   |    EN    |               [Banerjee et al.](https://arxiv.org/pdf/2303.13284.pdf)                |     ❌      |
