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

