---
draft: true
---

Starting from Bell's inequality
$$
 N(A_{+}, B_{-}) + N(B_{+}, C_{-} ) \geq N(A_{+}, C_{-}) \tag{1}
$$

and rewriting $N(A_{+}, B_{-})$  as

$$ N(A_{+}, B_{-}, C_{+}) + N(A_{+}, B_{-}, C_{-})$$

we can simplify $(1)$ to obtain

$$
N(A_{+}, B_{-}, C_{+}) + N(A_{+}, B_{+}, C_{-}) \geq 0
$$

The experiment is composed by a source $S$ of entangled particles and two detectors $D$ which allow to measure the spin component of the particles along different directions ($D+$ is triggered when the spin is $\uparrow$ in the specified direction, vice versa for $D-$).

Let $N(\uparrow_{a}, \downarrow_{b})$ be the number of times that Alice measures $\uparrow$ in the $a$ direction **and** Bob measures $\downarrow$ in the $b$ direction.

Considering the directions $a,b = 0, \theta, 2\theta \quad (\theta \neq 0)$ we want to prove that 

$$
P(\uparrow _{0}, \downarrow _{\theta}) + P(\uparrow _{\theta}, \downarrow _{2\theta}) < P(\uparrow _{0}, \downarrow _{2\theta}) \tag{2}
$$

where 

$$
P(\uparrow _{a}, \downarrow _{b}) = \left| \braket{ \uparrow _{a}\downarrow_{b}|\Psi }  \right|^{2} \tag{3}
$$
#todo what is upa downb? bra or ket?

Recalling the operator 

$$
S_{\theta} \triangleq S_{z} \cos \theta + S_{x} \sin\theta
$$
and its eigenvectors 

$$
\ket{\uparrow } _{\theta} = \cos\left( \frac{\theta}{2} \right) \ket{\uparrow } + \sin\left( \frac{\theta}{2} \right) \ket{\downarrow } 
$$

$$
\ket{\downarrow }_{\theta} = \sin\left( \frac{\theta}{2} \right) \ket{\uparrow } - \cos\left( \frac{\theta}{2} \right) \ket{\downarrow } 
$$

we can write

$$
\ket{\uparrow_{0} \downarrow _{\theta}} = \sin(\theta/2) \ket{\uparrow } \otimes \ket{\uparrow } - \cos(\theta/2) \ket{\uparrow } \otimes \ket{\downarrow } 
$$

We can also 
