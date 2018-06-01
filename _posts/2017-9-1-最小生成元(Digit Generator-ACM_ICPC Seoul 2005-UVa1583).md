---
layout: post
category: 
title: 最小生成元(Digit Generator-ACM_ICPC Seoul 2005-UVa1583)
date: 2017-9-1 15:51:24.000000000 +08:00
tags: 算法, ACM/ICPC 
keywords: 字符串, 最小生成元

---

### 最小生成元

```
#include <stdio.h>
#include <string.h>
#define MAXN 105

int main(int argc, char const *argv[])
{
    int n=0;
    int yes=0;

    char str[MAXN];

    scanf("%d", &n);//1<=n,n<=10000
    
    //for (int ni = n-1; ni >0 ; --ni)//最大生成元
    for (int ni = 1; ni <=n ; ++ni)
    {   
        memset(str,0,sizeof(str));
        sprintf(str,"%d", ni);
        
        int len=strlen(str);
        int sum=0;

        for (int i = 0; i < len; ++i)
        {
            sum+=str[i]-'0';
        }
        printf("ni= %s sum= %d\n", str, sum);

        if (sum+ni==n)
        {
            printf("%d\n", ni);
            yes=1;
            break;
        }
    }

    if (!yes)
    {
        printf("%d\n", 0);
    }

    return 0;
}
```