---
nextnote: "[[Nearly free electrons]]"
---


>[!tip] See also the [[Models#Bloch theorem|QCMP lecture]] about this topic

We now want to remove the free electron approximation and introduce a periodic potential while still working under the [[Free electron model#^129090|Born-Oppenherimer approximation]] and **independent electron model**.

Since the potential $V$ is periodic (and remembering what we saw about the [[Reciprocal lattice|reciprocal lattice]]) we can write 

$$
V(\vec{r} + \vec{r}_{n}) = V(\vec{r}) = \sum_{\vec{G}} V_{\vec{G}} ~ e^{ i \vec{G}\cdot \vec{r} }
$$

with

$$\vec{r}_{n} = n_1 \vec{a}_{1} + n_2 \vec{a}_{2} + n_3 \vec{a}_{3}$$
and 

$$
\vec{G} = h \vec{g}_{1} + k \vec{g}_{2} + l \vec{g}_{3}
$$

# Bloch theorem

The Bloch theorem states that the wave function of a particle in a periodic potential can be expressed as:

$$
\begin{align}
 & \Psi_{m,\vec{k}}(\vec{r}) = e^{  i \vec{k} \cdot \vec{r} } \mu_{m,\vec{k}}(\vec{r}) \qquad \leftarrow  \text{Bloch states}
\\
 & \mu_{m,\vec{k}} (\vec{r}) = \mu_{m,\vec{k}} (\vec{r} + \vec{r}_{n})
\end{align}
$$

Where $m$ is the **band index** (which will often be omitted).

This means that the wave functions are no longer plane waves but are plane waves multiplied by a function $\mu$ which has the same periodicity of the lattice. The Bloch state does NOT have the same periodicity of the lattice.

The same concept can be formulated also as (omitting $m$).

$$
\Psi_{\vec{k}} (\vec{r} + \vec{r}_{n}) = e^{ i \vec{k}(\vec{r} + \vec{r}_{n}) } \mu_{\vec{k}} (\vec{r} + \vec{r}_{n}) = e^{  i\vec{k}\cdot\vec{r}_{n} } ~ e^{ i \vec{k} \cdot \vec{r} } \mu_{\vec{k}} (\vec{r}) = e^{  i \vec{k} \cdot \vec{r}_{n} } \Psi_{\vec{k}} (\vec{r})
$$

## Consequences

Given a crystal with dimensions $L_1, L_2, L_3$ which contains $N = N_1, N_2, N_3$ primitive cells, the BVK conditions tell us that: 

$$
\Psi_{\vec{k}} = (\vec{r} + N_{i} \vec{a}_{i}) = \Psi_{\vec{k}} (\vec{r}) \tag{1}
$$

and the Bloch theorem that 

$$
\Psi_{\vec{k}}(\vec{r} + N_{i} \vec{a}_{i}) = e^{ i \vec{k} N_{i} \vec{a}_{i} } \tag{2} \Psi_{\vec{k}} (\vec{r})
$$

By imposing $(1)$ = $(2)$ we need to have the exponential equal to $1$. Since $\vec{k}$ is a vector of the reciprocal lattice it can be written as $\vec{k} = x_1 \vec{g}_{1} + x_2 \vec{g}_{2} + x_3 \vec{g}_{3}$.

From the [[Reciprocal lattice#^d7feea|relation]] between the vectors of the direct and reciprocal lattice we get 

$$
2\pi N_{i} x_{i} = 2 \pi m_{i} \qquad m_{i} \in \mathbb{Z}
$$

and thus 

$$
x_{i} = \frac{m_{i}}{N_{i}}
$$

## Demonstration

#todo

