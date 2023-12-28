---
nextnote: "[[Cohesion in crystals]]"
---

# Reciprocal lattice

Let's start from studying the simple case of a 1D crystal whose atoms are arranged in a line at a distance $a$ (**period**) from each other.

#todo improve drawing

![[1dCrystal.png]]
Let's now introduce a function $\rho$ that has the same periodicity of the crystal:

$$
\rho(x + ma) = \rho(x) \qquad m \in \mathbb{Z}
$$

If we write the Fourier expansion of $\rho$ we get

$$
\rho(x) = \sum_{n} \rho_{n} e^{ ikx } = \sum_{n} \rho_{n} e^{ i \frac{2\pi}{a} n x }
$$

We want to demonstrate that #todo ???:

$$
\begin{align}
\rho(x + ma) &= \sum_{n} \rho_{n} e^{ i \frac{2\pi}{a} n (x + ma) }  \\
&= \sum_{n} \rho_{n} e^{ i \frac{2\pi}{a}nx} ~ \overbrace{ e^{ i 2\pi m n } }^{ 1 } \\
&= \sum_{n} \rho _{n} e^{ i \frac{2\pi}{a} nx } \\
&= \rho(x)
\end{align}
$$

So if we have a periodic function its Fourier expansion can be written only for certain values of $k_{n} = 2n\pi/a$.

## 3D case

This can be generalized in 3 dimensions as follows:

$$
\rho(\vec{r} + \vec{r}_{n}) = \rho(\vec{r})
$$

with $\vec{r}_n = n_1 \vec{a}_{1} + n_2 \vec{a}_{2} + n_3 \vec{a}_{3}$

Similarly to before, the Fourier series can be written as 

$$
\rho(\vec{r}) = \sum_{\vec{G}} = \rho_{\vec{G}} e^{ i \vec{H} \cdot \vec{r} }
$$

with 

$$
\vec{G} \cdot \vec{r}_{n} = 2\pi m \qquad m \in \mathbb{Z}
$$

Similarly to the demonstration above we can write 

$$
\rho(\vec{r} + \vec{r}_{n}) = \sum_{\vec{G}} \rho_{\vec{G}} e^{ i \vec{G} (\vec{r} + \vec{r}_{n}) } = \sum_{\vec{G}} \rho_{\vec{G}} e^{ i  \vec{G} \cdot \vec{r} } ~  e^{ i \vec{G} \cdot \vec{r}_{n} }
$$
If

$$
\vec{G}\cdot \vec{r}_{n} = 2\pi m \tag{1}
$$

the last exponential becomes $=1$ and we get:

$$
\rho(\vec{r} + \vec{r}_{n}) =\sum_{\vec{G}} \rho_\vec{G} ~ e^{ i \vec{G} \cdot \vec{r} } = \rho(\vec{r})
$$

Again, the sum is not on every possible $\vec{G}$ wave vector.

## Finding a base

It can be useful to define a base $(\vec{g}_{1}, \vec{g}_{2}, \vec{g}_{3})$ to express $\vec{G}$:

$$
\vec{G} = h\vec{g}_{1} + k \vec{g}_{2} + l\vec{g}_{3} \qquad h,k,l \in \mathbb{Z}
$$

We now need to find $h,k,l$ that satisfy the condition $(1)$ for each $\vec{r}_{n} = n_1 \vec{a}_{1} + n_2 \vec{a}_{2} + n_3 \vec{a}_{3}$.

If we take the particular case in which $\vec{r}_{n}$ is parallel to $\vec{a}_{1}$:

$$
\vec{r}_{n} = n_1 \vec{a}_{1} \qquad (n_2 = n_3 = 0)
$$

we get 

$$
\begin{align}
\vec{G} \cdot \vec{r}_{n} &= hn_1 ~ \vec{g}_{1} \cdot \vec{a}_{1} + k n_2 ~ \vec{g}_{2} \cdot \vec{a}_{2} + l n_3 ~ \vec{g}_{3} \cdot \vec{a}_{3}  \\
&= hn_1 ~\vec{g}_{1}\cdot \vec{a}_{1}\\
&= 2 \pi m \\

\end{align}
$$

^43f463

which (since $m$ is a generic integer) is true when 

$$
\begin{cases}
\vec{g}_{1} \cdot \vec{a}_{1} = 2 \pi \\
\vec{g}_{2} \cdot \vec{a}_{1} = 0 \\
\vec{f}_{3} \cdot \vec{a}_{1} = 0
\end{cases}
$$

The same can be done for $\vec{r}_{n} = n_2 \vec{a}_{2}$ and $\vec{r}_{n} = n_3 \vec{a}_{3}$ getting the condition: 

$$
\vec{g}_{i} \cdot \vec{a}_{j} = 2 \pi \delta_{ij}
$$

^d7feea

The vectors $\vec{G}$ are the **vectors of the reciprocal lattice** and $\vec{g}_{i}$ are the **primitive vectors**.

Dimensionally $G = [\text{length}^{-1}]$ and thus the wave vector $\vec{g}_{1}$ (for example) is **perpendicular** to $\vec{a}_{2}$ and $\vec{a}_{3}$.

We can see that there is an **inverse proportionality** between the lengths of the vectors: 

$$
\vec{g}_{1} \cdot \vec{a}_{1} = 2 \pi \implies |\vec{g}_{1}| \cdot |\vec{a}_{1}| \cos(\alpha) = 2 \pi \implies |\vec{g}_{1}| = \frac{2\pi}{|\vec{a}_{1}|} \cos(\alpha)
$$
where $\alpha$ is the angle between $\vec{g}_{1}$ and $\vec{a}_{1}$.

## Volume of the reciprocal lattice

Given the volume of the direct lattice $\mathbf{V} = \vec{a}_{1} \cdot (\vec{a}_{2} \times \vec{a}_{3})$ we can find that the volume of the reciprocal lattice is 

$$
\mathbf{V}_{rec} = \vec{g}_{1} \cdot (\vec{g}_{2} \times \vec{g}_{3}) = \dots = \frac{(2\pi)^{3}}{\mathbf{V}}
$$

## Theorem

Given the Miller indices $h, k, l$ we can prove that 

$$
\vec{G}_{hkl} = h \vec{g}_{1} + k \vec{g}_{2} + l \vec{g}_{3} \text{ is } \perp \text{to the } (h,k,l) \text{ plane} \tag{1}
$$

and

$$
|\vec{G}_{hkl}| = \frac{2\pi}{d_{hkl}} \tag{2}
$$

where $d_{hkl}$ id the distance between adjacent planes.

>[!warning] Demonstration omitted

# X-Ray diffraction

## Bragg formulation

![[bragg.png|300]]

In the Bragg formulation the crystal is made by parallel planes and the constructive interference happens only for certain $\theta$ such that the difference in optical path is proportional to the wavelength. More precisely, given the difference in optical path (the extra distance) $L = 2d \sin(\theta)$, we have constructive interference if 

$$
L = n \lambda \qquad n \in \mathbb{N}, ~\lambda \text{ wavelength of light}
$$
and thus 

$$
\boxed{ 2d \sin\theta = n \lambda }
$$

## Von Laue formulation

In the Von Laue formulation we start by taking two lattice points (in red) and supposing that every atom can irradiate the incident radiation in every direction.

![[von laue.svg|400]]

($|\vec{n}| = 1$ and it has the same direction of $\vec{k}$) (not sure)

We can say that the two wavelengths are equal 

$$
\displaylines{
\lambda_{\text{incident}} = \lambda_{\text{diffracted}} \\
|\vec{k}| = |\vec{k}'|
}
$$

and that the two wave vectors are: 

$$
\begin{align}
& \text{Incident: } && \vec{k} = \frac{2\pi}{\lambda}\vec{n} \\
& \text{Diffracted:} && \vec{k} = \frac{2\pi}{\lambda} \vec{n}
\end{align}
$$

In this case the difference in optical path is 

$$
L = \vec{d} \cdot \vec{n} - \vec{d} \cdot \vec{n}' = \vec{d} \cdot (\vec{n} - \vec{n}')
$$

And the constructive interference happens when, like before, $L$ is an integer multiple of the wavelength: 

$$
L = m \lambda \qquad m \in \mathbb{N}
$$

So we get 
$$
\displaylines{
\vec{d} \cdot (\vec{n} - \vec{n}') = m \lambda \\
\vec{d}\cdot(\vec{n} - \vec{n}') \frac{2\pi}{\lambda} = m\lambda \cdot \frac{2\pi}{\lambda} \\
\vec{d}(\vec{k} - \vec{k}') = 2\pi m
}
$$

Since the two lattice points are "connected" by $\vec{r}_{n}$ we can also write the expression above as ( #todo is this true????)

$$
\vec{r}_{n}(\vec{k} - \vec{k}') = 2\pi m \quad\forall ~\vec{r}_{n}
$$

which is the definition ([[#^43f463|?]]) of reciprocal lattice $\vec{r}_{n} \cdot \vec{G} = 2\pi m$. 

So the Von Laue condition can be written as 

$$
\boxed{ \vec{k} - \vec{k}' = \Delta \vec{k} = \vec{G} }
$$

A different way to write the same formula, using the fact that $|\vec{k}| = |\vec{k}'|$ is: 

$$
\displaylines{
\vec{G} = \vec{k} - \vec{k}' \\
\vec{k}' = \vec{k} - \vec{G} \\
|\vec{k}'|  = | \vec{k} - \vec{G}| = |\vec{k}| \\
\cancel{ |\vec{k}|^{2} } + |\vec{G}| ^{2} - 2\vec{k} \cdot \vec{G} = \cancel{ |\vec{k}|^{2} } \\
\Downarrow \\
\vec{k}\cdot \vec{G} = \frac{|\vec{G}|^{2}}{2} \iff |\vec{k}|\cos\alpha = \frac{|\vec{G}|^{2}}{2}
}
$$

### Equivalence of the formulations

To show that the two formulations are equivalent we can start from the second version of the Von Laue formulation ($\vec{k} -\vec{k}' = \vec{G} \dots$)

