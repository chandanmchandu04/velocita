# Pandas DataFrame Operations in Python

This guide demonstrates the use of `pandas` DataFrame in Python with practical examples, from creating DataFrames to manipulating data and performing indexing and slicing operations.

## Table of Contents

1. [Creating a DataFrame from a List](#creating-a-dataframe-from-a-list)
2. [Creating a DataFrame from a Dictionary](#creating-a-dataframe-from-a-dictionary)
3. [Renaming Columns and Performing Operations](#renaming-columns-and-performing-operations)
4. [Indexing and Slicing with `iloc`](#indexing-and-slicing-with-iloc)
5. [Indexing and Slicing with `loc`](#indexing-and-slicing-with-loc)
6. [Setting the Index of a DataFrame](#setting-the-index-of-a-dataframe)

---

## 1. Creating a DataFrame from a List

In this example, we create a DataFrame from a list of lists. Each inner list represents a row, and we specify the column names.

```python
import pandas as pd

student_marks = [[40, 60],
                 [70, 80],
                 [90, 95],
                 [100, 100]]

cd = pd.DataFrame(student_marks, columns=['physics', 'chemistry'])
cd.index = ['M', 'N', 'O', 'P']
print(cd)
