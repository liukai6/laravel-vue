<template>
 
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <router-link to="/data">data</router-link>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: center; " width="100%">
          <h1>查询每日数据</h1>
    </el-header>
    <router-view name='data'></router-view>
   
     
  </el-container>
</el-container>
</template>
