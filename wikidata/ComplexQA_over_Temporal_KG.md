# Complex Question Answering Over Temporal Knowledge Graphs [^1]
Question Answering over Temporal Knowledge Graphs (TKGQA) is the task of answering natural language questions based on TKGs. 
Unlike QA over conventional KGs, in TKGQA the questions contain temporal constraints, and the supporting data resource is a TKG.
Hence, this paper introduced a semantic parsing based method, namely AE-TQ(**A**MR **e**nhanced **T**KG**Q**A), which leverages abstract meaning representation (AMR) for understanding 
complex questions, and produces question-oriented semantic information for explicit and effective temporal reasoning

The AE-TQ method is evaluated on [CronQuestions](https://aclanthology.org/2021.acl-long.520.pdf) dataset [^2], the largest known TKGQA dataset. CronQuestions contains 232K complex questions that are further categorized into
 </br>    – Before/After type: e.g., Who was the President of USA before Obama?,
 </br>    – First/Last type: e.g., Who was the first President of USA?, and
 </br>    – Time Join type: e.g., Which club did Cristiano Ronaldo play for when Messi played for FC Barcelona?
</br> Hits@1 and Hits@3 are used to evaluate the experimental results.
##  Experimental Results of different TKGQA methods over [CronQuestions](https://aclanthology.org/2021.acl-long.520.pdf) dataset
Comparison with other baselines on CronQuestions dataset, Hits@1 and Hits@3 for different reasoning type questions. The bold denotes the best results and the underline denotes the comparable second ones.
<table>
  <tr>
    <th rowspan="2">Methods</th><th colspan="3">hits@1</th><th colspan="3">hits@3</th><th rowspan="2">Reported By</th>
  </tr>
  <tr>
    <td>Before/After type </td> <td>First/Last type</td> <td>Time Join type</td> <td>Before/After type </td> <td>First/Last type</td> <td>Time Join type</td>
  </tr>
  <tr>
    <td><a href="https://aclanthology.org/2020.acl-main.412.pdf">EmbedKGQA</a></td>
    <td>0.199 </td> <td>0.324 </td> <td>0.223</td> <td>0.492</td> <td>0.523</td> <td>0.690</td>
    <td> Long et al., 2022</td>
  </tr>
  <tr>
    <td> <a href="https://aclanthology.org/2021.acl-long.520.pdf">T-EaE-add </a></td>
    <td>0.256 </td> <td>0.285 </td> <td>0.175</td> <td>0.405</td> <td> 0.442</td> <td>0.302</td>
    <td> Long et al., 2022</td>
  </tr>
  <tr>
    <td> <a href="https://aclanthology.org/2021.acl-long.520.pdf">T-EaE-replace</a></td>
    <td>0.256 </td> <td>0.288</td> <td>0.168</td> <td>0.417</td> <td>0.453</td> <td>0.316</td>
    <td> Long et al., 2022</td>
  </tr>
  <tr>
    <td> <a href="https://aclanthology.org/2021.acl-long.520.pdf">CronKGQA </a> </td>
    <td>0.288 </td> <td>0.371</td> <td>0.511</td> <td>0.500</td> <td>0.581</td> <td>0.701</td>
    <td> Long et al., 2022</td>
  </tr>
  <tr>
    <td> <a href="https://arxiv.org/abs/2112.05785"> TempoQR </a></td>
    <td><strong>0.670</strong></td> <td>__0.570__</td> <td><strong>0.896</strong></td> <td><strong>0.829</strong></td> <td>__0.733__</td> <td><strong>0.937</strong></td>
    <td> Long et al., 2022</td>
  </tr>
  <tr>
    <td> <a href="https://aclanthology.org/2021.acl-long.520.pdf">CronKGQA⋆</a> </td>
    <td>0.158</td> <td>0.370</td> <td>0.278</td> <td>0.281</td> <td>0.579</td> <td>0.438</td>
    <td> Long et al., 2022</td>
  </tr>
  <tr>
    <td> <a href="https://arxiv.org/abs/2112.05785">TempoQR⋆</a></td>
    <td>__0.585__</td> <td>0.507</td> <td>0.719</td> <td>__0.780__</td> <td>0.694</td> <td>__0.867__</td>
    <td> Long et al., 2022</td>
  </tr>
  <tr>
    <td> <a href="https://link.springer.com/content/pdf/10.1007/978-3-031-20891-1_6.pdf"> AE-TQ</a> </td>
    <td>0.542</td> <td><strong>0.762</strong></td> <td><u>__0.737__</u></td> <td>0.701</td> <td><strong>0.793</strong></td> <td>0.767</td>
    <td> Long et al., 2022</td>
  </tr>
 </table>
  
 
 [^1]: Long, S., Liao, J., Yang, S., Zhao, X., & Lin, X. (2022). Complex Question Answering Over Temporal Knowledge Graphs. In R. Chbeir, H. Huang, F. Silvestri, Y. Manolopoulos, & Y. Zhang (Eds.), Web Information Systems Engineering – WISE 2022 (Vol. 13724, pp. 65–80). Springer International Publishing. https://doi.org/10.1007/978-3-031-20891-1_6.
 [^2]: CronQuestions is a dataset created using Wikidata.
 
 [Go back to README](../README.md)
