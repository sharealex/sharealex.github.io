---
layout: post
category: algorithm
title: MergeSort reversion and BU versions
date: 2017-10-16 14:38:00 +08:00
keywords: MergeSort DevideAndConquer Reversion
---
## 本文主要探讨归并排序的递归以及迭代两种实现和优化

归并排序MergeSort
是一种经典而高效的排序算法，是一种采用分而治之(devide and conquer)方法的一个典型应用。
假使要得到一个有序完全有序序列，可以使构成其的两个子序列有序，然后在将它们合并；若使子序列有序，则应使子序列间断有序。这样的方法叫做二路归并。

具体的算法思想和复杂度可以参考：[这一篇](http://www.cnblogs.com/jingmoxukong/p/4308823.html)

本文着重介绍归并排序的两种实现，一种是递归实现，另外一种是迭代实现。
首先介绍其递归实现，有一点值得留心，就是对于排序区间是开区间还是闭区间：

```
    template <typename T>
    void merge(T arr[], int lo, int mi, int hi){
//        cout<<"merging ["<<lo<<","<<mi<<"] + ["<<"["<<mi+1<<","<<hi<<"]"<<endl;
        //合并的过程，开辟额外的存储空间
        //[lo,mi), [mi,hi) 合并
//        T C[lc];
//        for (int i = 0; i <lc ; ++i) {
//            C[i]=arr[mi+1+i];
//        }

//        T* A=arr+lo;
//        int lb=mi-lo;
//        T* B=new T[lb];
//        for (int i = 0; i < lb;  B[i]=A[i++]);//前半段子向量
//
//        int lc=hi-mi;//向量的后半段
//        T* C=arr+mi;
//        for (int i=0, j=0, k=0; (j<lb)||(k<lc); ){
//            //cout<<"i="<<i<<"j="<<j<<" k="<<k<<endl;
//            if ( ( j < lb ) && ( ! ( k < lc ) || ( B[j] <= C[k] ) ))
//                A[i++]=B[j++];//前半段比较小
//            if ( (k<lc) &&( !( j<lb )|| ( C[k]<B[j] )))
//                A[i++]=C[k++];//后半段比较小
//        }
//
//        delete[] B;

        //闭区间
        T* A=arr+lo;
        int lb=mi-lo+1;//+1
        T* B=new T[lb];
        for (int i = 0; i < lb;  B[i]=A[i++]);//前半段子向量

        int lc=hi-mi;//向量的后半段 [mi+1, hi]
        T* C=arr+mi+1;//+1
        for (int i=0, j=0, k=0; (j<lb)||(k<lc); ){
            //cout<<"i="<<i<<"j="<<j<<" k="<<k<<endl;
            if ( ( j < lb ) && ( ! ( k < lc ) || ( B[j] <= C[k] ) ))
                A[i++]=B[j++];//前半段比较小
            if ( (k<lc) &&( !( j<lb )|| ( C[k]<B[j] )))
                A[i++]=C[k++];//后半段比较小
        }

        delete[] B;
    }

    template <typename T>
    void __mergeSort(T arr[], int lo, int hi){//[lo,hi]排序
        //assert(lo<=hi);
//        if (hi-lo<2)//开区间
//            return;
        if (lo>=hi)//闭区间
            return;
//        {cout<<"rerurn"<<endl; return;}
        int mi=(lo+hi)/2;
//        cout<<"l sorting ["<<lo<<" , "<<mi<<"]"<<endl;
        __mergeSort(arr, lo, mi);
//        cout<<"1. finish ["<<lo<<" , "<<mi<<"]"<<endl;
       // cout<<"lo1="<<lo<<" mi1="<<mi<<endl;
       // __mergeSort(arr, mi, hi);
//        cout<<"r sorting ["<<mi+1<<" , "<<hi<<"]"<<endl;
        __mergeSort(arr, mi+1, hi);//闭区间
//        cout<<"2. finish ["<<mi+1<<" , "<<hi<<"]"<<endl;
       // cout<<"mi+1="<<mi+1<<" hi="<<hi<<endl;
        if (arr[mi]  > arr[mi+1])//这一步优化,只有当前后无序才进行合并
        merge(arr, lo, mi, hi);
//        cout<<"merge finished"<<endl;
    }


    // 归并排序
    // 时间复杂度O(nlogn)
    template <typename T>
    void mergeSort(T arr[], int n){
       // __mergeSort(arr,  0, n);//[0,n)开区间
        __mergeSort(arr,  0, n-1);//[0,n-1]闭区间
    }
```


另外一种为非递归实现

```

//时间复杂度O(NLOGN)
//空间复杂度O()
//对于arr[lo，hi)进行排序
//template <typename T>
//void mergeSort(T arr[], int lo, int hi){
//    //非递归实现
//}
template <typename T>
void __merge(T arr[], int l, int mi, int r, T aux[]){
    //合并arr[l,mi] [mi+1, hi]
    for (int i=l; i<=r; i++)
        aux[i]=arr[i];
    int i=l,j=mi+1;//i 表示前半段，j表示后半段
    for (int k=l; k<=r;k++){//k表示需要进行覆盖的整个串

        if (i>mi){//表示前半段已经赋值完了
            arr[k]=aux[j];j++;
        }
        else if(j>r){//表示后半段赋值完了
            arr[k]=aux[i];i++;
        }
        else if (aux[i]<aux[j]){//谁小谁赋值
            arr[k]=aux[i];i++;
        }
        else {
            arr[k]=aux[j];j++;
        }
    }
}

//对于arr[0.n)进行归并排序
void mergeSort(int arr[], int n){
    //非递归实现
    assert(n>0);
    int* aux=new int[n];
    for (int i=0;i<n;++i){
        aux[i]=arr[i];
    }

    for (int sz=1; sz<n;sz+=sz){
        for (int i=0; i<n ;i+=sz+sz){
            //arr[i, i+sz) [i+sz, i+sz+sz) 合并
            __merge( arr, i, i+sz-1, min(n-1,i+sz+sz-1), aux);
        }
    }

    delete[] aux;
    return ;
}
```

未完......