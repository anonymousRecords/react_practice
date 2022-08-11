# React-practice
[React Website Tutorial - Beginner React JS Project Fully Responsive](https://www.youtube.com/watch?v=I2UBjN5ER4s)을 참고하여   
React로 웹 사이트를 제작해보는 시간을 가졌습니다.

### 참고 사항
해당 영상은
```
<Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
```
을 제시하지만,   
2022년 기준 
- Switch를 제공하지 않고
- component를 사용하면 error 가 발생함(https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element)

따라서
```
<Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
```
으로 작성하기를 추천합니다.
          <Route path='/products' element={<Products/>} />
