# Python TDD

Welcome to Python TDD. Python comes with its own testing librarby called unittest. However the most popular testing library is called pytest which you can install via pip (pip installs packages). 


## Some notes on Developing in Python
---
### 1. Create a virtual environment in your directory:

```unix
$ python3 -m venv 'name_of_your_environment'
```

Generaly put your venvs in a gitignore.

### 2. Activate the environment:

```unix
$ source 'name_of_your_environment'/bin/activate
```
Now when you install anything through pip install (like pytest) it wil go into this virtual environment. 
### To deactivate: 

```unix
$ deactivate
```

### Save Dependencies: 

```unix
$ pip freeze > requirements.txt
```

### Install External Dependencies

```unix
$ pip install -r requirements.txt
```

## Testing 
---

Testing is done using pytest.

Note when adding a file into a test file be sure to prefix it with 'test_'. For example a test file fo FizzBuzz would be test_fizzbuzz.py. Otherwise it won't be found by the Python testing library.

### Runnign the tests 

```unix
$ pytest
```

conftest.py can be thought of as your root, all import into test files should be done from the location of this file, see test_example.py

