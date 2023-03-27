# CrunchQA

**CrunchQA** [[1]](#myfootnote1)</sup> is a KGQA dataset based on a knowledge graph derived from the Crunchbase, which contains information about companies ranging from early-stage startups to large companies. The questions are automatically generated from a set of carefully designed templates and paraphrases that capture several complexity levels. The knowledge graph CrunchKG includes 3.2 million entities, 31 relations, and 17.6 million triples.


## Leaderboard: Overall 


|      Model / System      | Year  | Hits@1 | Language |                             Reported by                             |
|:------------------------:|:-----:|:------:|:--------:|:-------------------------------------------------------------------:|
|  TransE(clustering) [1]  | 2023  |  15.6  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
| ComplEx(clustering) [1]  | 2023  |  12.4  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
| DistMult(clustering) [1] | 2023  |  10.2  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |



## Leaderboard: Temporal 


|       Model / System       | Year  | Hits@1 | Language |                             Reported by                             |
|:--------------------------:|:-----:|:------:|:--------:|:-------------------------------------------------------------------:|
|  DistMult(clustering) [1]  | 2023  |  8.9   |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
|  ComplEx(clustering) [1]   | 2023  |  8.8   |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
|   TransE(clustering) [1]   | 2023  |  8.1   |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |



## Leaderboard: Numeric 


|      Model / System      | Year  | Hits@1 | Language |                             Reported by                             |
|:------------------------:|:-----:|:------:|:--------:|:-------------------------------------------------------------------:|
|  TransE(clustering) [1]  | 2023  |  37.4  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
| ComplEx(clustering) [1]  | 2023  |  33.5  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
| DistMult(clustering) [1] | 2023  |  8.8   |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |




## Leaderboard: Entity


|      Model / System       | Year  | Hits@1 | Language |                             Reported by                             |
|:-------------------------:|:-----:|:------:|:--------:|:-------------------------------------------------------------------:|
|  TransE(clustering) [1]   | 2023  |  18.2  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
|        TransE [1]         | 2023  |   17   |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
|    ComplExLiteral [1]     | 2023  |  13.8  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
|  ComplEx(clustering) [1]  | 2023  |  13.2  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
|       DistMult [1]        | 2023  |  12.7  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
|        ComplEx [1]        | 2023  |   12   |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
| DistMult(clustering) [1]  | 2023  |  11.1  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |
| DistMultGatedLiteral [1]  | 2023  |  10.6  |   EN     | [Yu et al.](https://ieeexplore.ieee.org/abstract/document/10021012) |


* [1] Those methods are based on EmbedKGQA framework. 

## References
<a name="myfootnote1">[1]</a> Yu, Lifan and Madjid, Nadya Abdel and Difallah, Djellel. [CrunchQA: A Synthetic Dataset for Question Answering over Crunchbase Knowledge Graph.](https://ieeexplore.ieee.org/abstract/document/10021012) In IEEE International Conference on Big Data (Big Data), pp. 4635-4641. 2022.

[Go back to the README](../README.md)