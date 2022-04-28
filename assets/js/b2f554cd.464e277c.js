"use strict";(self.webpackChunkzhixuedoc=self.webpackChunkzhixuedoc||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"1.1.1\u53d1\u5e03","metadata":{"permalink":"/blog/1.1.1\u53d1\u5e03","editUrl":"https://github.com/MasterYuan418/doc.zhixue.github.io/blog/2022-04-27_1.1.0.md","source":"@site/blog/2022-04-27_1.1.0.md","title":"1.1.1 \u53d1\u5e03\u65e5\u5fd7","description":"\u8fd9\u662f\u4e00\u4e2a\u7834\u574f\u6027\u66f4\u65b0\uff0c\u5728\u6b64\u7248\u672c\u5185\u6211\u4eec\u79fb\u9664\u4e86\u4e00\u4e9b\u51fd\u6570\uff0c\u8bf7\u8c28\u614e\u66f4\u65b0\uff01","date":"2022-04-27T00:00:00.000Z","formattedDate":"April 27, 2022","tags":[{"label":"release-notes","permalink":"/blog/tags/release-notes"},{"label":"dev-version","permalink":"/blog/tags/dev-version"}],"readingTime":2.96,"truncated":false,"authors":[{"name":"Hu Anwen","title":"\u667a\u5b66\u7f51 \u7ef4\u62a4\u8005","url":"https://github.com/anwenhu/","imageURL":"https://avatars.githubusercontent.com/u/35159580?v=4","key":"AnwenHu"},{"name":"MasterYuan","title":"\u667a\u5b66\u7f51 \u6587\u6863\u7ef4\u62a4\u8005","url":"https://github.com/MasterYuan418/","imageURL":"https://s2.loli.net/2022/02/24/wdRJGpiar5xUlgF.jpg","key":"MasterYuan"}],"frontMatter":{"slug":"1.1.1\u53d1\u5e03","title":"1.1.1 \u53d1\u5e03\u65e5\u5fd7","authors":["AnwenHu","MasterYuan"],"tags":["release-notes","dev-version"]},"nextItem":{"title":"1.7.0a0 \u53d1\u5e03\u65e5\u5fd7","permalink":"/blog/1.7.0a0\u7248\u672c\u53d1\u5e03"}},"content":":::danger \u8b66\u544a\\r\\n\u8fd9\u662f\u4e00\u4e2a\u7834\u574f\u6027\u66f4\u65b0\uff0c\u5728\u6b64\u7248\u672c\u5185\u6211\u4eec\u79fb\u9664\u4e86\u4e00\u4e9b\u51fd\u6570\uff0c\u8bf7\u8c28\u614e\u66f4\u65b0\uff01\\r\\n:::\\r\\n\\r\\n## \u79fb\u9664\u7684\u51fd\u6570\\r\\n```python {13-14}\\r\\ndef get_score(self, user_num: str, clazz_id: str, subject_id: str):\\r\\n  pass\\r\\n\\r\\ndef get_topicSets(self, examId):\\r\\n  pass\\r\\n\\r\\ndef get_class_subject_score(self, class_id: str, subject_id: str) -> ClassSubjectScores:\\r\\n  pass\\r\\n\\r\\nasync def __get_class_scores(self, class_id: str, exam_id: str) -> ClassScores:\\r\\n  pass\\r\\n\\r\\ndef get_authheader():\\r\\n  pass\\r\\n```\\r\\n\u4ee5\u4e0a\u7684\u6e90\u4ee3\u7801\u5747\u53ef\u4ee5\u5728`deleted.py`\u5185\u627e\u5230\u3002\\r\\n\\r\\n`get_authheader`\u53ef\u4ee5\u7528`teacher.get_headers()`\u66ff\u6362\u3002\\r\\n\\r\\n### \u6559\u5e08\u6a21\u5757\u6dfb\u52a0\u7684\u51fd\u6570\\r\\n\\r\\n|         \u51fd\u6570\u540d          |         \u53c2\u6570         |                      \u89e3\u91ca                       |            \u8fd4\u56de            |\\r\\n| :---------------------: | :------------------: | :---------------------------------------------: | :------------------------: |\\r\\n| get_school_exam_classes | school_id subject_id |              \u83b7\u5f97\u8be5\u5b66\u79d1\u8003\u8bd5\u7684\u73ed\u7ea7               |       List[StuClass]       |\\r\\n|    get_exam_subjects    |       exam_id        |              \u83b7\u5f97\u672c\u6b21\u8003\u8bd5\u6240\u6709\u5b66\u79d1               |   ExtendedList[Subject]    |\\r\\n|     get_exam_detail     |       exam_id        | \u83b7\u5f97\u672c\u6b21\u8003\u8bd5\u7684\u4fe1\u606f\uff08\u7b49\u540c\u4e8e\u5b66\u751f\u7684get_exams()[0]) |            Exam            |\\r\\n|       get_scores        |       exam_id        |             \u83b7\u5f97\u672c\u6b21\u8003\u8bd5\u5168\u6821\u7684\u4fe1\u606f              |           Scores           |\\r\\n|  get_marking_progress   | subject_id school_id |           \u83b7\u5f97\u672c\u6b21\u8003\u8bd5\u67d0\u6821\u7684\u9605\u5377\u8fdb\u5ea6            | List[TopicMarkingProgress] |\\r\\n|        get_token        |                      |             \u83b7\u5f97\u5f53\u524d\u767b\u5f55\u8d26\u6237\u7684token             |            str             |\\r\\n|       get_headers       |                      |                   \u83b7\u5f97\u6388\u6743\u5934                    |       {\\"token\\": \\"\\"}        |\\r\\n\\r\\n### \u5b66\u751f\u6a21\u5757\u6dfb\u52a0\u7684\u51fd\u6570\\r\\n\\r\\n|         \u51fd\u6570\u540d         |                             \u53c2\u6570                             |                        \u89e3\u91ca                        |                             \u8fd4\u56de                             |\\r\\n| :--------------------: | :----------------------------------------------------------: | :------------------------------------------------: | :----------------------------------------------------------: |\\r\\n|     get_page_exam      |                   page_index **as** `int`                    |               \u83b7\u5f97\u6307\u5b9a\u9875\u6570\u7684\u8003\u8bd5\u5217\u8868               | Tuple[ExtendedList[Exam], bool]\uff0c**\u5176\u4e2d\u6700\u540e\u4e00\u4e2abool\u4e3a\u6210\u529f\u6807\u5fd7** |\\r\\n|    get_latest_exam     |                                                              |                   \u83b7\u5f97\u6700\u65b0\u7684\u8003\u8bd5                   |                           ExamInfo                           |\\r\\n|       get_exams        |                                                              |                    \u83b7\u5f97\u6240\u6709\u8003\u8bd5                    |                      ExtendedList[Exam]                      |\\r\\n|     get_self_mark      | exam_data **as** `Union[Exam, str]`                      has_total_score **as** `bool` = `True` |                 \u83b7\u5f97\u6307\u5b9a\u8003\u8bd5\u7684\u6210\u7ee9                 |     Mark\uff08has_total_score\u4e3aTrue\u8868\u793a\u6700\u540e\u4f1a\u6dfb\u52a0\u4e00\u4e2a\u603b\u5206\uff09      |\\r\\n|      get_subjects      |           exam_data **as** `Union[Exam, str] = \\"\\"`           |          \u83b7\u5f97\u6307\u5b9a\u8003\u8bd5\u7684\u6240\u6709\u5b66\u79d1\uff08\u65e0\u603b\u5206\uff09          |                    ExtendedList[Subject]                     |\\r\\n|      get_subject       |           exam_data **as** `Union[Exam, str] = \\"\\"`           |                 \u83b7\u5f97\u6307\u5b9a\u8003\u8bd5\u7684\u5b66\u79d1                 |                           Subject                            |\\r\\n|     get_homeworks      | size **as** `int`           is_complete **as**  `bool`    subject_code **as** code |         \u83b7\u5f97\u6307\u5b9a\u6570\u91cf\u7684\u4f5c\u4e1a **(\u7a0d\u540e\u89e3\u91ca)**          |          ExtendedList[StuHomework]\uff08\u4e0d\u542b\u4f5c\u4e1a\u8d44\u6e90\uff09           |\\r\\n| get_homework_resources |          hwid **as** `str` hw_typecode **as** `int`          | \u83b7\u53d6\u6307\u5b9a\u4f5c\u4e1a\u7684\u4f5c\u4e1a\u8d44\u6e90(\u4f8b\u5982\u9898\u76ee\u6587\u6863)**(\u7a0d\u540e\u89e3\u91ca)** |                       List[HwResource]                       |\\r\\n\\r\\n\u7531\u4e8e\u4f5c\u4e1a\u529f\u80fd\u662f\u9996\u6b21\u51fa\u73b0\uff0c\u7279\u6b64\u505a\u4ecb\u7ecd\uff1a\\r\\n\\r\\n#### get_homeworks\\r\\n\\r\\n\u8be5\u65b9\u6cd5\u6709\u56db\u4e2a\u53c2\u6570\uff1a\\r\\n\\r\\n`size(int)`\u8868\u793a\u8fd4\u56de\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a20\\r\\n\\r\\n`is_complete(bool)`\u8868\u793a\u662f\u5426\u8981\u53d6\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\uff0cTrue\u4e3a\u53d6\u5df2\u5b8c\u6210\u7684\uff0cFalse\u4e3a\u53d6\u672a\u5b8c\u6210\u7684\uff0c\u9ed8\u8ba4\u4e3aFalse\\r\\n\\r\\n`subject_code(code)`\u8868\u793a\u5b66\u79d1\u4ee3\u7801\uff0c\u4f8b\u5982\\"01\\" \u8868\u793a\u53d6\u8bed\u6587\u4f5c\u4e1a, \\"02\\"\u8868\u793a\u53d6\u6570\u5b66\u4f5c\u4e1a\uff0c\u9ed8\u8ba4\u4e3a-1\uff0c\u4f60\u53ef\u4ee5\u5728Subject\u7c7b\u91cc\u627e\u5230\uff0c\u5b9a\u4e49\u53eb\u505a`code`\\r\\n\\r\\n#### get_homework_resources\\r\\n\\r\\n\u8be5\u65b9\u6cd5\u67092\u4e2a\u53c2\u6570\uff1a\\r\\n\\r\\n`hwid(str)`\uff1a\u4f5c\u4e1aID\\r\\n\\r\\n`hw_typecode(int)`\uff1a\u4f5c\u4e1a\u7c7b\u578b\u4ee3\u7801"},{"id":"1.7.0a0\u7248\u672c\u53d1\u5e03","metadata":{"permalink":"/blog/1.7.0a0\u7248\u672c\u53d1\u5e03","editUrl":"https://github.com/MasterYuan418/doc.zhixue.github.io/blog/2022-02-23_1.7.0a0v.md","source":"@site/blog/2022-02-23_1.7.0a0v.md","title":"1.7.0a0 \u53d1\u5e03\u65e5\u5fd7","description":"\u5728\u672c\u7248\u672c\u5185\uff0c\u6211\u4eec\u5168\u90e8\u7ee7\u627f\u4e86\u6765\u81eazhixuewang-python\u7684\u4ee3\u7801\uff0c\u6ca1\u6709\u4efb\u4f55\u6539\u52a8\u3002","date":"2022-02-23T00:00:00.000Z","formattedDate":"February 23, 2022","tags":[{"label":"release-notes","permalink":"/blog/tags/release-notes"},{"label":"major-version","permalink":"/blog/tags/major-version"}],"readingTime":0.15,"truncated":false,"authors":[{"name":"MasterYuan","title":"\u667a\u5b66\u7f51 \u6587\u6863\u7ef4\u62a4\u8005","url":"https://github.com/MasterYuan418/","imageURL":"https://s2.loli.net/2022/02/24/wdRJGpiar5xUlgF.jpg","key":"MasterYuan"}],"frontMatter":{"slug":"1.7.0a0\u7248\u672c\u53d1\u5e03","title":"1.7.0a0 \u53d1\u5e03\u65e5\u5fd7","authors":"MasterYuan","tags":["release-notes","major-version"]},"prevItem":{"title":"1.1.1 \u53d1\u5e03\u65e5\u5fd7","permalink":"/blog/1.1.1\u53d1\u5e03"},"nextItem":{"title":"1.7.0a1 \u53d1\u5e03\u65e5\u5fd7","permalink":"/blog/1.7.0a1\u7248\u672c\u53d1\u5e03"}},"content":"# 1.7.0a0 \u53d1\u5e03\u65e5\u5fd7\\r\\n\\r\\n  \u5728\u672c\u7248\u672c\u5185\uff0c\u6211\u4eec\u5168\u90e8\u7ee7\u627f\u4e86\u6765\u81ea`zhixuewang-python`\u7684\u4ee3\u7801\uff0c\u6ca1\u6709\u4efb\u4f55\u6539\u52a8\u3002"},{"id":"1.7.0a1\u7248\u672c\u53d1\u5e03","metadata":{"permalink":"/blog/1.7.0a1\u7248\u672c\u53d1\u5e03","editUrl":"https://github.com/MasterYuan418/doc.zhixue.github.io/blog/2022-02-23_1.7.0a1v.md","source":"@site/blog/2022-02-23_1.7.0a1v.md","title":"1.7.0a1 \u53d1\u5e03\u65e5\u5fd7","description":"\u672c\u7248\u672c\u6dfb\u52a0\u4e86\u516c\u7528get_authheader\u65b9\u6cd5\u3002","date":"2022-02-23T00:00:00.000Z","formattedDate":"February 23, 2022","tags":[{"label":"release-notes","permalink":"/blog/tags/release-notes"},{"label":"major-version","permalink":"/blog/tags/major-version"}],"readingTime":0.085,"truncated":false,"authors":[{"name":"MasterYuan","title":"\u667a\u5b66\u7f51 \u6587\u6863\u7ef4\u62a4\u8005","url":"https://github.com/MasterYuan418/","imageURL":"https://s2.loli.net/2022/02/24/wdRJGpiar5xUlgF.jpg","key":"MasterYuan"}],"frontMatter":{"slug":"1.7.0a1\u7248\u672c\u53d1\u5e03","title":"1.7.0a1 \u53d1\u5e03\u65e5\u5fd7","authors":"MasterYuan","tags":["release-notes","major-version"]},"prevItem":{"title":"1.7.0a0 \u53d1\u5e03\u65e5\u5fd7","permalink":"/blog/1.7.0a0\u7248\u672c\u53d1\u5e03"}},"content":"# 1.7.0a1 \u53d1\u5e03\u65e5\u5fd7\\r\\n\\r\\n  \u672c\u7248\u672c\u6dfb\u52a0\u4e86\u516c\u7528`get_authheader`\u65b9\u6cd5\u3002"}]}')}}]);