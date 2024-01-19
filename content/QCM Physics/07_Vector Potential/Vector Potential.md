---
nextnote: "[[Quantum Hall effect]]"
author: Emanuele Messina, BabelDev0
authorlink: https://github.com/BabelDev0
draft: false
---
# Potentials

## Electric Field

From Gauss
$$
\nabla \cdot F=\frac{\rho}{\varepsilon}
$$
(where $F$ is the electric field)

While from Faraday, in absence of magnetic field
$$
\nabla \times F = 0
$$
which implies that the field is conservative, by Stokes
$$
\int_{\Sigma\left( \gamma \right)}  \left( \nabla \times F \right) \cdot \mathbf{ds} =\oint_{\gamma}F\cdot \mathbf{dl} \quad \to0 
$$
(since the curl is null, due to the arbitrariness of $\Sigma\left( \gamma \right)$ the circulation must be 0 $\forall \gamma$ given by every $\Sigma$; the converse holds due to the arbitrariness of $\gamma$, if the circulation is 0 $\forall \gamma$ then the curl must be identically null). 

Given the famous vector identity for a scalar field $\phi$
$$
\nabla \times\left( \nabla \phi \right) = 0
$$
we can always express the field $F$ as the gradient of a scalar field $\phi$.

Since we know that field is the potential, and physically it represents the work done by the field per unit charge against itself to bring the charge from infinity to a position $x$, hence that work is negative, we conventionally put a negative sign in
$$
F = -\nabla \phi
$$
$\phi$ is the scalar potential of $F$.

In the non conservative case (presence of time varying magnetic field)
$$
\nabla \times F=-\frac{\partial B}{\partial t}
$$

## Magnetic Field

From Gauss
$$
\nabla \cdot B=0
$$
While from Ampere, in absence of electric field
$$
\nabla \times B=\mu_{0} J
$$
Another famous vector identity for vector fields this time says
$$
\nabla \cdot\left( \nabla \times A \right)=0
$$
So we can always express $B$ as the curl of another vector field $A$:
$$
B=\nabla \times A
$$
$A$ is called the **vector potential** of $B$.

## Time varying magnetic field

Now look at
$$
\nabla \times F = -\frac{\partial B}{\partial t}=-\frac{\partial \left( \nabla \times A  \right)}{\partial t} = -\nabla \times\frac{\partial A}{\partial t}
$$
$$
\implies \nabla \times\left( F+\frac{\partial A}{\partial t} \right)=0
$$
This means the inner sum must be the gradient of a scalar field:
$$
F+\frac{\partial A}{\partial t} = -\nabla \phi
$$
(where $-$ is for convention to make $\phi$ the original scalar potential)
$$
\implies F=-\nabla \phi-\frac{\partial A}{\partial t}
$$
so we have to account for the time evolution of the vector potential which creates a non conservative time varying electric field, nice.

# Gauge Freedom

We know that primitives are defined up to a constant, since in derivation the constant disappears.
The same is true for scalar potentials, we only care about potential differences:
$$
F=-\nabla \phi \quad\to \quad\phi\left( \mathbf{r} \right)=\int _{-\infty}^{\mathbf{r}} F\left( \mathbf{r} \right)\cdot \mathbf{dr}+\phi(-\infty)
$$
(this is an example of how we could choose the constant, and we usually put $\phi(-\infty)=0$)

So we can say that **a scalar potential is defined up to a constant**.

For vector potentials, they are defined up to a scalar field, since
$$
\nabla \times(A+\nabla \chi)=\nabla \times A+\cancel{ \nabla \times \nabla \chi } 
$$

Since the potentials are defined up to something, these fields should be the same 
$$
F'=-\nabla \phi'=-\nabla\left( \phi+c \right)=-\nabla \phi=F
$$
$$
B'=\nabla \times A'=\nabla \times(A+\nabla \chi)=\nabla \times A = B
$$

Now look at Faraday for the new fields
$$
\nabla \times F' = -\frac{\partial B'}{\partial t}
$$
$$
\nabla \times\left( F'+\frac{\partial A'}{\partial t} \right)=0
$$
$$
\implies F+\frac{\partial A}{\partial t} = F'+\frac{\partial A'}{\partial t}
$$
$$
-\nabla\phi+\frac{\partial A}{\partial t} = -\nabla\phi'+\frac{\partial A'}{\partial t} =-\nabla\phi'+\frac{\partial A}{\partial t}+\frac{\partial \nabla \chi}{\partial t}
$$
$$
-\nabla \phi=-\nabla \phi'+\nabla \frac{\partial \chi}{\partial t}
$$
$$
\implies
\begin{align}
&\phi'=\phi+\frac{\partial \chi}{\partial t} \\
& A' = A+\nabla \chi
\end{align}
$$
These are the relations between the vector and scalar potential when we shift the vector potential by a scalar field.

These choices are called *gauges*, and we are free to choose (gauge invariance).

#todo Schrödinger equation for magnetic and electric field