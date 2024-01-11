---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
In this section we would like to describe the properties of the atoms that make up the crystal.

In the Born Oppenheimer approximation #todo we described them as fixed in place but now we want to make a more precise analysis.

We start by modelling the atoms with a mass-spring system like in the image below 

#todo

In 1D we have the Hooke law: 

$$
\vec{F} = - k_{x} \vec{u}_{x}
$$

with $k_{x}$ the spring constant. The potential is given by 

$$
U = -\int_{0}^{x} \vec{F}\cdot d\vec{x} = \frac{1}{2} k x^{2}
$$

# Nomenclature

We identify the position of a primitive cell with a translation vector $\vec{r}_{n}$ and the **real** positions of the atoms inside the primitive cell with another translation vector (which has the origin at the origin of the primitive cell) with $\vec{r}_{\alpha}$:

- The $n$-th primitive cell is identified by $(n_1, n_2, n_3) \implies \vec{r}_{n} = n_1 \vec{a}_{1} + n_2 \vec{a}_{2} +n_3 \vec{a}_{3}$
- Atoms are identified by Greek letters $\alpha, \beta, \dots$
- The crystallographic directions are identified by $i, j, k$

This means that the position of the atom $\alpha$ in the cell $n$ is 

$$
\begin{align}
 & \vec{r}_{n\alpha} = \vec{r}_{n} + \vec{r}_{\alpha} \\
 \\
 & \vec{r}_{n} = n_1 \vec{a}_{1} + n_2 \vec{a}_{2}  + n_3 \vec{a}_{3} \\
 & \vec{r}_{\alpha} = (r_{\alpha i}, r_{\alpha j}, r_{\alpha k}) \qquad \text{(it has fractionary components)}
\end{align}
$$

We also need to introduce the term $u_{n\alpha} = u_{n\alpha}(t)$ which represents the displacement with respect to the equilibrium position, so that we can write 

$$
\vec{r}'_{n\alpha}(t) = \underbrace{ \vec{r}_{n\alpha} }_{ \substack{\text{equilibrium} \\ \text{position}} } + \vec{u}_{n\alpha}(t)
$$

# ?

We call $\phi$ the potential energy with respect to the equilibrium position.

If we work with the component $i$ we get (Taylor #todo improve explanation)

$$
\phi(\underbrace{ r_{n\alpha i} }_{ \text{equilibrium} } + \underbrace{ S_{n\alpha i} }_{ \text{displacement} }) = \phi(r_{n\alpha i}) + \frac{1}{2} \sum_{\substack{ n\alpha i  \\ m\beta j}} \frac{ \partial^{2} \phi }{ \partial r_{n\alpha i} \partial r_{m\beta j}} \cdot u_{n\alpha i} \cdot u_{m\beta j} + \dots
$$

where 

$$
\frac{ \partial^{2} \phi }{ \partial r_{n\alpha i} \partial r_{m\beta j}} = \phi_{n\alpha i}^{m\beta j}
$$

is called **coupling constant** which is a generalized force constant #todo what???

We can write the force acting on atom $\alpha$ in the cell $n$ along the $i$ direction, caused by the displacement of the atom $\beta$ in the $m$ cell along the $j$ direction as 

$$
F_{n\alpha i} = - \phi_{n\alpha i}^{m\beta j} \cdot u_{m\beta j}
$$

## Equation of motion

If we call $M_{\alpha}$ the mass of the ion $\alpha$ we get the following equation of motion 

$$
M_{\alpha} \frac{d^{2} u_{n\alpha i}}{dt^{2}} = - \sum_{m\beta j} \phi_{n\alpha i}^{m\beta j} u_{m\beta j}
$$

which is the generalized version of $\sum F = - \sum k\cdot x$

If we have $N$ primitive cells and $r$ atoms in the basis we would have $3rN$ differential equations that describe the movement of the atoms. 

We are going to impose ( #todo why?) the solution 

$$
u_{n\alpha i} = \text{const} \cdot u_{\alpha i}(\vec{q}) \cdot e^{ i(\vec{q} \cdot \vec{r}_{n} - \omega t) } 
$$

where $\vec{q}$ is the wave vector and $\text{const }$ is the normalization constant and is proportional to $1/\sqrt{ M_{\alpha} }= k/\sqrt{ M_{\alpha} }$.

What we want to do now is to calculate the second derivative of $u_{n\alpha i}$ and substitute it inside the equation of motion, getting (**calculations omitted**):

$$
-\omega^{2} u_{\alpha i}(\vec{q}) + \sum_{\beta j} D_{\alpha i}^{\beta j}(\vec{q}) \cdot u_{\beta j}(\vec{q}) \tag{1} = 0
$$
where 

$$
D_{\alpha i}^{\beta j} = \sum_{m} \phi_{n\alpha i}^{m\beta j}\cdot \frac{1}{\sqrt{ M_{\alpha } M_{\beta}}} \cdot e^{ i\vec{q}(\vec{r}_{m} - \vec{r}_{n}) }
$$

is the **interaction matrix** and is independent from $n$

Equations $(1)$ (which are a system of $3r$ equations) describe what happens to the **single** atom $\alpha$ along the direction $i$ with respect to the movement of all the **atoms** $\beta$ along the directions $j$. To solve the system we need to have that 

$$
\det \Big\{D_{\alpha i}^{\beta j}(\vec{q}) - \omega^{2} \mathbb{1}\Big\} = 0
$$
We call $\omega = \omega(\vec{q})$ **dispersion curves** or **dispersion branches**.

If $r =1$ (only one atom inside the base) we have $3$ equations and thus $3$ dispersion branches, called **acoustic branches**. If, on the other hand, $r > 1$ (more than one atom in the base) we will have $3r$ dispersion branches, out of which there will be $3$ **acoustic branches** and $3r - 3$ **optical branches**.

## Normal modes for 1D monoatomic chain

![[monoatomic chain.svg|500]]
In this case we have a monoatomic linear chain of atoms which are allowed to move in the horizontal direction only. Each atom has mass $M$ and $u_{n}$ represents the displacement of the atom $n$.

The atoms are modelled as a mass-spring system with springs with **elastic force constant** $f$.

### Equation of motion

The equation of motion for the atom $n$ is given by 

$$
M \frac{d^{2}u_{n}}{dt} = {\color{blue} - \phi_{n}^{n-1} \cdot u_{n-1}}  {\color{purple} ~- \phi_{n}^{n} \cdot u_{n} } {\color{green}~ - \phi_{n}^{n+1} \cdot u_{n+1}} 
$$

Where the three terms represent the contributions of the atoms $n-1$, $n$ and $n + 1$ respectively. To proceed with the calculation we need to calculate the individual terms:

![[monoatomic contributions.svg]]

Substituting the three orange expression that we got graphically we get: 

$$
M \frac{d^{2}u_{n}}{dt^{2}} = f \cdot u_{n-1} - 2f \cdot u_{n} + f \cdot u_{n+1} \tag{2}
$$


The solutions are in the form:
#todo why?

$$
u_{n} = \frac{k}{\sqrt{ m }} ~ u(q) ~e^{ i(qna - \omega t) }
$$

If we apply the BVK conditions (i.e. the atom $N+1$ is equal to the atom $N = 1$ and $u(a) = u[(N+1)\cdot a]$) we get: 

$$
\begin{align}
u(a) &= \frac{k}{\sqrt{ m }}~u(q) ~e^{ i(qa-\omega t) }  \\
&= u\big[(N+1) \cdot a\big]  \\
&= \frac{k}{\sqrt{ m }} ~ u(q) ~ e^{ iqNa } ~ e^{ i(qa - \omega t) }
\end{align}
$$

which is satisfied when $qNa = 2\pi m$ with $m \in \mathbb{Z}$. This leads to 

$$
\boxed{q = \frac{2\pi}{Na} = \frac{2\pi}{L}m}
$$

where $L = N\cdot a$ is the length of the chain.

If we substitute these results into the equation of motion we get (**calculations of the derivatives omitted**): 

$$
-\omega^{2} M = -f\big[2 - e^{ -iqa } - e^{ iqa }\big] =2 \sqrt{ \frac{f}{M}} \cdot \left| \sin\left( \frac{qa}{2} \right) \right| 
$$

![[dispersion monoatomic chain.png|400]]

Along the chain we have propagating waves with:

- Phase velocity: $c = \omega / q$
- Group velocity: $v = \frac{ \partial \omega }{ \partial q }$

For $q \ll \pi / a$ we can approximate the $\sin$ linearly getting 

$$
c = a \sqrt{ \frac{f}{M} } = v
$$

which is the typical behaviour of **acoustic waves**.

## Normal modes for 1D bi-atomic chain

This case is similar to the one before but the lattice, in this case, is composed of 2 different atoms.

![[biatomic chain.svg]]

The process is the same as before but now we need to take into consideration that we are dealing with 2 different kinds of atoms and thus we will have two equations of motion: 

$$
\begin{cases}
M_1 \frac{d^{2} N_{n1}}{dt^{2}} + f (2u_{n1} - u_{n2} - u_{n2 - 1}) = 0  \qquad (3a)\\
\\ 
M_2 \frac{d^{2} N_{n2}}{dt^{2}} + f (2u_{n2} - u_{n1} - u_{n1 + 1}) = 0 \qquad (3b)
\end{cases}
$$

which can be solved similarly to before (BVK, etc) getting a system of equation that can be solved by imposing the determinant of its matrix equal to 0: 

$$
\begin{vmatrix}
\frac{2f}{M_1} - \omega^{2} & -\frac{f}{\sqrt{ M_1 M_2 }} (1 + \exp[-iqa]) \\
-\frac{f}{\sqrt{ M_1 M_2 }} (1 + \exp[iqa]) & \frac{2f}{M_2} - \omega^{2}
\end{vmatrix} = 0
$$

#todo
