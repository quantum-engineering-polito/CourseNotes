---
nextnote: "[[Quantum computing]]"
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
%% Declaration of the trace operator %%
$$
\DeclareMathOperator{\tr}{Tr}
$$
%% Declaration of the trace operator %%

# Preliminaries 

As we already know the elementary unit o quantum information is the qubit, which is a linear combination of orthonormal basis defined in an Hilbert space 

$$
\ket{\psi}  = \alpha \ket{0}  + \beta \ket{1} , \quad |\alpha|^{2} + |\beta|^{2} = 1
$$

If the quantum state is completely defined, as for example in the case 

$$
\ket{\psi} = \frac{1}{\sqrt{ 2 }} \ket{0} + \frac{1}{\sqrt{ 2 }}\ket{1} 
$$

we refer to it as a **pure state**. In this case we could, in theory, exactly predict the evolution of the system. Since this case is ideal, we need a way to represent and study systems which are not completely known, these systems are said to be in a **mixed state**.

To be able to measure the "amount of information" in the quantum case we need to extend the concept of entropy to this case. This can be done by generalizing the Gibbs definition to obtain the **von Neumann entropy**: 

$$
S = -k_{B} \tr[\rho \ln\rho]
$$

Where $\tr$ is the **trace operator** and $\rho$ is the **density matrix** defined as follows 

$$
\rho = \sum_{j} p_{j}\ket{\psi_{j}} \bra{\psi_{j}} 
$$

## Outer product

The quantity $\ket{\psi_{j}}\bra{\psi_{j}}$ in the definition of the density matrix is called outer product. If we two vectors $\ket{v}$ and $\ket{w}$ in the inner product spaces $V$ and $W$ respectively, the outer product $\ket{w}\bra{v}$ is the linear operator from $V$ to $W$ defined by 

$$
(\ket{w} \bra{v} )(\ket{v'} ) \equiv \ket{w} \braket{ v | v' }  = \braket{ v | v' } ~\ket{w} 
$$

The expression $\braket{ v | v' } ~\ket{w}$ could denote that:

- The operator $\ket{w} \bra{v}$ acts on $\ket{v'}$
- The vector $\ket{w}$ is multiplied by the complex number $\braket{ v|v' }$

## Completeness relation

Let $\ket{i}$ be any orthonormal basis for the vector space $V$, so that any arbitrary vector $\ket{v}$ can be written as 

$$
\ket{v}  = \sum_{i} v_{i} \ket{i} 
$$

where $v_{i}$ is a complex number. Since $\braket{ i|v } = v_{i}$ we can rewrite the relation above as 

$$
\ket{v} = \sum_{i} v_{i}\ket{i} = \sum_{i} \ket{i} \braket{ i|v } =\left( \sum_{i} \ket{i} \bra{i}  \right) \ket{v} 
$$

which means that 

$$
\sum_{i} \ket{i} \bra{i} = \mathbb{I} \tag{Completeness relation}
$$

## Operator representation in the outer product notation

If $A$ is a linear operator from space $V$ to space $W$, $\ket{v_{i}}$ and $\ket{w_{i}}$ are orthonormal basis for $V$ and $W$, we can use the completeness relation to write the following 

$$
\displaylines{
\mathbb{I}_{w} = \sum_{j} \ket{w_{j}}  \bra{w_{j}} \\
\mathbb{I}_{v} = \sum_{i} \ket{v_{i}} \bra{v_{i}} 
}
$$

The operator $A$ can be written as follows 

$$
\displaylines{
A = \mathbb{I}_{w}~A~\mathbb{I}_{v}\\
A = \sum_{ij} \ket{w_{j}} \braket{ w_{j} | A | v_{i} } \bra{v_{i}} \\
A = \sum_{ij} \braket{ w_{j}|A | v_{i}} \ket{w_{j}} \bra{v_{i}}  
}
$$

$A$ will then have matrix element $\braket{ w_{j} | A | v_{i} }$ in the $i$th column and $j$th row.

## Trace

The trace of a square operator $A$ acting on a Hilbert space $\mathcal{H}$ is defined as 

$$
\tr[A] \equiv \sum_{i} \braket{ i | A |i } 
$$
where $\{\ket{i}\}$ is some complete and orthonormal basis for $\mathcal{H}$.

**The trace of $A$ can be written as the sum of its diagonal elements.**

### Properties of the trace operator

- **Cyclic**: $\tr[AB] = \tr[BA]$
- **Linear**: $\tr[z(A + B)] = z(\tr[A] + \tr[B])$
- **Invariant under unitary transformations**: $\tr[UAU^{\dagger}] = \tr[U^{\dagger}UA] = \tr[A]$
- **Independent on the basis**

## Density operator or density matrix

While we can use the state vectors notation to describe a system composed of multiple subsystems, another equivalent (but often more convenient) way of describing it is the **density matrix**. This notation is most useful in cases where the state of the system is **not completely know**.

If we have a quantum state that can be in one of a number of states $\ket{\psi_{i}}$ with respective probabilities $p_{i}$, we can call $\{p_{i}, \ket{\psi_{i}}\}$ an **ensemble of pure states**. The density matrix for such a system is defined as: 

$$
\rho \triangleq \sum_{i} p_{i} \ket{\psi _{i} } \bra{\psi _{i} } 
$$

### Pure and mixed states

A quantum system is said to be in a pure state $\ket{\psi}$ when its state is known **exactly**. In this case the density matrix is given by 

$$
\rho = \ket{\psi} \bra{\psi} 
$$

In all the other cases the system is said to be in a **mixed state**.

The following criterion can be used to determine whether a state is pure or mixed given the density matrix 

$$
\begin{cases}
\tr(\rho^{2}) = 1 && \text{pure state} \\ \\
\tr(\rho^{2}) < 1 && \text{mixed state}
\end{cases}
$$

### Unitary operators with the density matrix

If we want to study how a unitary operator $U$ affects a state using the formalism of the density matrix we notice that, if we have a system in the state $\ket{\psi_{i}}$ with probability $p_{i}$, after applying $U$ the state will be in the state $U \ket{\psi _{i}}$ with the same probability $p_{i}$.

From the definition of the density matrix we can obtain the following 

$$
\rho = \sum_{i} p_{i} \ket{\psi _{i} } \bra{\psi _{i} } \overset{ U }{ \longrightarrow  } \sum_{i} p_{i} U \ket{\psi_{i} } \bra{\psi_{i} } U^{\dagger} = U \rho U^{\dagger}
$$

### Measurements with the density matrix


#### Quantum measurements recap

Quantum measurements are described by a collection $\{M_{m}\}$ of **measurement operators** which act on the state space of the system being measured. The index $m$ refers to the measurement outcomes that may occur.
If for example the system, before the measurement, is in an initial state $\ket{\psi_{i}}$, the probability of finding it in state $m$ after the measurement is given by 

$$
p(m|i) = \braket{ \psi_{i}  | M_{m} ^{\dagger} M_{m} | \psi_{i}    }  = \tr(M_{m} ^{\dagger} M_{m} \ket{\psi_{i} } \bra{\psi_{i} } )
$$

#todo explain how we got the last equality (page 10,15 of the slides)

The state of the system after the measurement will be 

$$
\ket{\psi_{i} ^{m}} \frac{M_{m} \ket{\psi} }{\sqrt{ \Braket{ \psi | M_{m} ^{\dagger}M_{m} |\psi }  }} 
$$

The density operator of the system above (i.e. after obtaining the measurement $m$ starting from the state $i$) is given by 

$$
\rho_{m}=\sum_{i}p(i\mid m)\mid\psi_{i}^{m}\rangle\langle\psi_{i}^{m}|=\sum_{i}p(i\mid m)\frac{M_{m}\mid\psi_{i}\rangle\langle\psi_{i}|\,M_{m}^{\dagger}}{\Braket{   \psi_{i}| M_{m}^{\dagger}M_{m}|\psi_{i}}}
$$



