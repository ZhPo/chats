1.冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
2.非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

绝大部分小程序定义好的事件都是冒泡的。冒泡是什么意思呢，就是点击一个子元素，如果事件是冒泡的，那么这
个事件也会传递给父元素。如在下边这个例子中，点击 inner view 会先后调用 handleTap2 和 handleTap1 。
<view id="outer" bindtap="handleTap1">
outer view
<view id="inner" bindtap="handleTap2">
 inner view
</view>
</view>
如果我们想要阻止事件的冒泡。我们可以以 catch 开头来定义一个事件。这样就可以拦截事件的冒泡了。如在下边这个例子中，点击 inner view会先后
调用 handleTap3 和 handleTap2 (因为tap事件会冒泡到 middle view ，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击
middle view 会触发 handleTap2 ，点击 outer view 会触发 handleTap1 。
<view id="outer" bindtap="handleTap1">
outer view
 <view id="middle" catchtap="handleTap2">
middle view
  <view id="inner" bindtap="handleTap3">
inner view
  </view>
 </view>
</view>
event项目创建如图：













![image](https://github.com/ZhPo/chats/blob/master/pages/%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E5%92%8C%E9%98%BB%E6%AD%A2/event.png)
